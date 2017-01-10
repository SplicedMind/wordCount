module.exports = {
 
   words: function(arg ) {
      //Split the string using whitespaces as separator
      var argArray = arg.split(/\s/);
      //Checks and remove any whitespace element from the array
      while(true)         
      {
         if(argArray.indexOf('') != -1)
         {
            argArray.splice(argArray.indexOf(''), 1);
         } 
         else
         {
            break;
         }        
      }
      var argJson = {};
      //Counts each element in the array create a json object with the array value and its
      //number of occurrence
      for(var i = 0; i < argArray.length; ++i)   
      {
         var j = i;
         var count = 0;
         while(j < argArray.length)
         {
            if(argArray[i] === argArray[j])
            {
               count += 1;
               if(i !== j)
               {
                  argArray.splice(j,1);
               }                             
            } 
            j += 1;        
         }
         argJson[argArray[i]] = count;
      }
      return argJson;
   }
}