const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const verifyToken = require('../middlewares/verifyToken');
const bodyParser = require('body-parser');
const Game = require('../models/Game');
const User = require('../models/User');
const multer = require('multer');
const temp = multer({ dest: 'temp/' });
const aws = require('aws-sdk');
const fs = require('fs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/games', verifyToken, (req, res) => {
    Game.find({}, (err, games) => {
        if (err) return res.status(500).send('Error!!');
        res.send({ games: games });
    });
});

router.post(
    '/addgame',
    [temp.single('game_poster'), verifyToken],
    (req, res) => {
        const user = req.userId;

        User.findById(user, { password: 0 }, (err, userPosted) => {
            if (err)
                return res
                    .status(500)
                    .send('There is a problem finding the user!');

            aws.config.setPromisesDependency();

            const s3 = new aws.S3({
                accessKeyId: process.env.AWS_ID,
                secretAccessKey: process.env.AWS_SECRET,
            });

            const params = {
                Bucket: process.env.BUCKET_NAME,
                Body: fs.createReadStream(req.file.path),
                Key: `gamex-${req.file.originalname}`,
                ContentType: 'image/jpeg',
            };

            s3.upload(params, (err, data) => {
                if (err) throw err;
                const locationUrl = data.Location;
                fs.unlinkSync(req.file.path);
                Game.create(
                    {
                        game_poster: locationUrl,
                        game_name: req.body.game_name,
                        game_desc: req.body.game_desc,
                        postedBy: userPosted,
                    },
                    (err, game) => {
                        if (err) return res.status(500).send('Game Error!!');
                        User.findByIdAndUpdate(
                            req.userId,
                            {
                                $push: {
                                    games: {
                                        _id: game._id,
                                        game_name: game.game_name,
                                    },
                                },
                            },
                            (err, user) => {
                                if (err)
                                    return res
                                        .status(500)
                                        .send(
                                            'There is a problem finding the user.'
                                        );
                                if (!user)
                                    return res
                                        .status(404)
                                        .send('No user found.');
                            }
                        );
                        res.status(200).send({ game });
                    }
                );
            });
        });
    }
);

router.delete('/deletegame', verifyToken, (req, res) => {
    Game.findByIdAndDelete(req.query.id, (err) => {
        if (err) return res.send('Error while deleting!!');
        res.status(200).send('Deleted Successfully!!');
    });
});

module.exports = router;
