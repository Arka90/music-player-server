const fs = require("fs");
const {S3 , GetObjectCommand, PutObjectCommand} = require("@aws-sdk/client-s3");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_BUCKET_ACCESS_KEY;
const secretAccessKey = process.env.AWS_BUCKET_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// uploads a file to s3
async function uploadFile(file) {
  // creating fileStream
  // const fileStream = fs.createReadStream(file.path);

  // creating uploading param
  const uploadParams = {
    Bucket: bucketName,
    Body: file.buffer,
    Key: "test-imagee",
    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(uploadParams)


  // returning results after uploading to the bucket
 return await s3.send(command)
 

}

async function getCloudFrontSignedUrl(url) {
  const Signedurl = await getSignedUrlCloudFront({
    url,
    dateLessThan: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    privateKey: process.env.AWS_CLOUDFRONT_PRIVATE_KEY,
    keyPairId: process.env.AWS_CLOUDFRONT_KEY_PAIR,
  });

  return Signedurl;
}

module.exports = {
  uploadFile,
  getCloudFrontSignedUrl
};
