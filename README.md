body{
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    background-image: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
    height: 100%;
    padding: 0px;
    margin: 0px;
    
}
.container {
    width: 100%;
    height: 100%;
}
.logo{
    
    padding: 30px;
    width: 200px;
    
    
}

.background{
    width: 100%;
    background-image: url('./images/hero-mobile.jpg');
    height: 290px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.content{
    padding: 35px;
    width: 100%;
    
    
    

}
h1{
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 45px;
    font-weight: 600;
    color: hsl(0, 6%, 24%);


}
span{
    color: hsl(0, 36%, 70%);
    font-weight: 200;
}
p{
    font-size: 16px;
    color: hsl(0, 36%, 70%);

}
form{
    margin-top: 50px;
}
.input-container{
    border: 1px solid hsl(0, 36%, 70%);
    display: flex;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-right: 0px;
    height: 50px;
    align-items: center ;
    gap: 15px;
    width: 300px;

}
#email {
    background-image: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
    border: 0px ;
    border-radius: 30px;
    margin-left: 30px;
    flex: 3;
    
    
}
input[type="email"]::placeholder {
    color: hsl(0, 36%, 70%);
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 0px;
    margin: 0px;
    
}
button{
    position: relative;
    height: 100%;
    min-width: 80px;
    
    border-radius: 30px;
    border: 0px;
    flex: 0.8;
    z-index: 20;
    margin-left: 5px;
    background-image: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
}
input[type="email"]:focus {
   
    outline: none ;
}

.duo {
    display: flex;
    gap: 10px;
    height: 100%;
    align-items: center ;
    flex: 1;
}

.error {
    text-align: left;
    color: hsl(0, 93%, 68%);
    font-size: 0.9em;
    margin-top: 5px;
    padding-left: 30px;
    margin-top: 10px;
    position: relative;
}
