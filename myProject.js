function game(){
    //👇התחילי לכתוב את הפרויקט כאן למטה
    var bot1_name = "צילי: ";
    var bot2_name = "גילי: ";
  
    //בוט חדש בשיחה
    var bot3_name = "מירי: ";
  
    //משתנה של מצב רוח
    var bot1_mood = "שמחה";
  
    //סופר את מספר השורה בשיחה
    var row_counter = 1;
    var row_text = "מספר השורה הוא: ";
  
    //משתנה של חיה
    var animal = "פיל";
    
    console.log(row_text + row_counter+ " . " + bot1_name + "היי מה נשמע " + animal + "?");
    row_counter++;
    console.log(row_text + row_counter+ " . " + bot2_name + "אני " +bot1_mood);
    row_counter++;
    console.log(row_text + row_counter+ " . " + bot1_name + "מה את עושה היום?");
    row_counter++;
    console.log(row_text + row_counter+ " . " + bot2_name + "הולכת לקוויןבי!!!");
    row_counter++;
    console.log(row_text + row_counter+ " . " + bot1_name + "באמת?! ומה את עושה שם?");
    row_counter++;
    console.log(row_text + row_counter+ " . " + bot2_name + "לומדת לתכנת! ולא לרכב על " + animal);
    row_counter++;
    console.log(row_text + row_counter+ " . " + bot2_name + "דיייי אז גם אני באה");
    row_counter++;
    bot1_mood = " מאושרת"; 
    console.log(row_text + row_counter+ " . " + bot1_name + "אעאעאהה אז עכשיו אני "+bot1_mood);
    row_counter++;
    console.log(row_text + row_counter+ " . " + bot3_name + "גם אני לומדת לתכנת בקוויןבי!"); //בוט חדש בשיחה
  
  //חידה - משתנה והדפסת הספרה אפס
  var num = 123456783657256;
  console.log(num * 0);
  console.log(num - num);
  
  //ספויילר למפגש הבא - הקפצת הודעה למשתמשת
    alert(bot1_name + "היי מה נשמע?");
    alert(bot2_name + "בסדר מה קורה?");
    alert(bot1_name + "מה את עושה היום?");
    alert(bot2_name + "הולכת לקוויןבי!!!");
    alert(bot1_name + "באמת?! ומה את עושה שם?");
    alert(bot2_name + "לומדת לתכנת!");
  
  }
  