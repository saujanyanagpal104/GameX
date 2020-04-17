const aws = require('aws-sdk');
const fs = require('fs');

const awsId = process.env.AWS_ID;
const awsSecret = process.env.AWS_SECRET;

const s3 = new aws.S3({
    accessKeyId: awsId,
    secretAccessKey: awsSecret,
});

const uploadFile = (file) => {
    const fileContent = fs.readFileSync(file);

    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: `gamex-${file}`,
        Body: fileContent,
        ContentType: 'image/jpeg',
    };

    s3.upload(params, (err, data) => {
        if (err) throw err;
        return data.Location;
    });
};

module.exports = uploadFile;
