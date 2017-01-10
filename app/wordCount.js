module.exports = {
 
   words: function(arg ) {
      var argArray = arg.split(/\s/);
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