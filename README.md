# camsnap
Capture a single frame of a mjpeg stream as a jpeg and hand it back to the requester via HTTP

#Dependencies
mjpeg-camera
express  
forever (optional)  
forever-service (optional)  

#Install  
Run from wherever you installed it  
I installed with forever service  
cd camsnap/  
sudo forever-service install camsnap --script camsnap.js   
sudo service camsnap start  
sudo update-rc.d camsnap enable  

