## camsnap
Capture a single frame of a mjpeg stream as a jpeg and hand it back to the requester via HTTP

#Dependencies
mjpeg-camera  
express  
forever *(optional)*  
forever-service *(optional)*  

#Install  
Run from wherever you installed it  
For example - I installed with forever service which handles logging etc  
  
1. cd camsnap/  
2. sudo forever-service install camsnap --script camsnap.js   
3. sudo service camsnap start  
4. sudo update-rc.d camsnap enable  

