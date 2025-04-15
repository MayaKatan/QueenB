function game() {
    //👇התחילי לכתוב את הפרויקט כאן למטה
    //שם המשתמשת
    var user_name = prompt("איך קוראים לך?");
    alert("תמיד רצית לדעת איזו מלכה את " + user_name + "?! \nהיום תגלי!");
    alert("תעני כל פעם את מספר התשובה הרלווטית לך, ובסוף נחשוף לך את התשובה!");
    var sum = 0;
    
    var answer1 = prompt("שאלה ראשונה: \n מה סרט דיסני האהוב עליך? \n 1 - כל דבר שמצויר יפה, בעיקר הסרטים הישנים \n 2 - כל סרט עם עלילה טובה! שרואים שמישהי השקיעה בכתיבה \n 3 - למי אכפת מהסרט?! חשבת פעם איך הטלוויזיה שלך עובדת בכלל?");
    //תנאי שבודק אם המשתמשת הכניסה את התשובה תקינה
    if(answer1 < 1 || answer1 > 3){
      alert("התשובה לא תקינה");
    }else{
      answer1 = Number(answer1);
      sum = sum + answer1;
    }
  
    var answer2 = prompt("שאלה שניה: \n באיזה פרס היית רוצה לזכות?? \n 1 - פרסים זה לא בשבילי, אני הייתי שמחה להציג במוזיאון \n 2 - פרס ישראל לספרות \n 3 - פרס נובל");
    answer2 = Number(answer2);
    sum = sum + answer2;
  
    var answer3 = prompt("שאלה שלישית: \n מה השיר האהוב עליך? \n 1 - ואחרי ככלות הכל והתמונה \n 2 - ״לילה לילה מסתכלת הלבנה..״ פזמון ליקינטון \n 3 - שיר היסודות, המנון הטבלה המחזורית");
    answer3 = Number(answer3);
    sum = sum + answer3;
  
    //חידה
    var num = prompt("הכניסי מספר בעל 3 ספרות");
    if(num > 99 && num < 1000){
      alert("מוכנה לגלות?! תופים תופים!");
      if(sum <= 5){
        alert("מזל טוב! את פרידה קאלו! \n פרידה קלאו הייתה ציירת מקסיקנית, עבודתה נחגגת במקסיקו כסמל של מסורת לאומית ומקומית, ועל ידי פמיניסטיות לתיאור בלתי מתפשר של החוויה הנשית.");
      }else if(sum <= 7){
        alert("מזל טוב! את לאה גולדברג! \n לאה גולדברג הייתה מהמשוררים העבריים הידועים והחשובים ביותר בעת החדשה, סופרת מבוגרים וילדים, מתרגמת, מבקרת, ציירת וחוקרת ספרות, עיתונאית ומבקרת תרבות, כלת פרס ישראל לספרות לשנת 1970.");
      } else{
        alert("מזל טוב! את מארי קירי! \n מארי קירי הייתה מדענית צרפתייה ממוצא פולני, חלוצה בחקר הקרינה הרדיואקטיביות. זכתה פעמיים בפרס נובל: בשנת 1903 זכתה בפרס נובל לפיזיקה. בזכות מחקרה על תופעת הקרינה, ובשנת 1911 זכתה בפרס נובל לכימיה על גילוי הרדיום והפולוניום, ועל חקר הרדיום.");
    }
  }
  }