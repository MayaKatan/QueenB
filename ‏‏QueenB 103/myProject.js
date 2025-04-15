function game(){
    //👇התחילי לכתוב את הפרויקט כאן למטה
    var animal = prompt("הכניסי שם של חיה");
    var blessing = prompt("הכניסי ברכה");
    var movie = prompt("הכניסי שם של סרט");
    var friend = prompt("הכניסי שם של חברה טובה שלך ");
    var teacher = prompt("הכניסי שם של המורה שלך");
    var object = prompt("הכניסי שם של חפץ דומם");
  
    //דולרים לשקלים
    var dollars = prompt("הכניסי סכום כסף בדולרים");
    dollars = Number(dollars);
    var shekels = dollars * 3.4;
  
    //הכנסת אותיות של שם ושם משפחה
    var firstLetter = prompt("הכניסי את האות הראשונה של שמך הפרטי");
    var secLetter = prompt("הכניסי את האות הראשונה של שם המשפחה שלך");
    var initials =  firstLetter + "״" + secLetter;
  
    //ספוילר לשיעור הבא - תנאים
    var answer = prompt("את מוכנה לקבל את הסיפור?!?!?!? במידה ואת מוכנה, כתבי: כן");
    if(answer == "כן"){
    
      //ירידת שורה בארלט השתמשו 
      // "\n"
      alert("היום בבוקר הלכתי לבית ספר ופתאום הופיע מולי"+animal+",הוא אמר לי "+blessing+", והזמין אותי לבוא לראות "+movie+"ֿֿ\n. לא היה לי כוח אליו אז התקשרתי ל"+friend+" ואמרתי לה שהיא חייבת לבוא מהר כי "+teacher+" קוראת לה, "+friend+" הגיעה בריצה ולא הבינה למה אני מדברת ל"+animal+", מיד היא התקשרה למשטרה והודיעה להן שיש פה משוגעת שמדברת עם "+object+". הסוף!" + "כל הסיפור עלה לך \n" +shekels + " שקלים.\n" +"\n"+ initials);
    }
  
  //אופציה להכניס ערכים חדשים וסיפור חדש
    animal = prompt("הכניסי שם של חיה");
    blessing = prompt("הכניסי ברכה");
    movie = prompt("הכניסי שם של סרט");
    friend = prompt("הכניסי שם של חברה טובה שלך ");
    teacher = prompt("הכניסי שם של המורה שלך");
    object = prompt("הכניסי שם של חפץ דומם");
    alert("סיפור חדש ומשעמם: \n"
          +"הינה כל המילים המוזרות שכתבת: \n"
          +animal+blessing+movie+friend+teacher+object);
  
    //חידה - 5-7
    var num = prompt("הכניסי את הספרה 7 או את הספרה 5");
    alert("קבלי חזרה את הספרה שלא הקלדת:");
    alert(12-num);
  }
  