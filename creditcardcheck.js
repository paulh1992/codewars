function getIssuer(number) {
  var cardnumber = number.toString();
  var length = cardnumber.length;
  cardnumber = cardnumber.split('');
  
  
  if(length === 13 && cardnumber[0]==='4' ){
  
    return "VISA";
    
  } else if(length === 16 && cardnumber[0]==='4' ){
    
    return "VISA";
  
  } else if(length === 16 && cardnumber[0]+cardnumber[1]==='51' ){
    
    return "Mastercard";
  
  } else if(length === 16 && cardnumber[0]+cardnumber[1]==='52' ){
    
    return "Mastercard";
  
  } else if(length === 16 && cardnumber[0]+cardnumber[1]==='53' ){
    
    return "Mastercard";
  
  } else if(length === 16 && cardnumber[0]+cardnumber[1]==='54' ){
  
    return "Mastercard";
  
  } else if(length === 16 && cardnumber[0]+cardnumber[1]==='55' ){
  
    return "Mastercard";
  
  } else if(length === 15 && cardnumber[0]+cardnumber[1]==='34' ){
      
      return "AMEX";
  
  }  else if(length === 15 && cardnumber[0]+cardnumber[1]==='37' ){
    
    return "AMEX";
  
  } else if(length === 16 && cardnumber[0]+cardnumber[1]+cardnumber[2]+cardnumber[3]==='6011' ){
    
    return "Discover";
    
  }  else
  
    return "Unknown";
    
  }