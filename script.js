        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyCe6mmtcXKcMxObKCUqvh47_r1ab4jG0fc",
          authDomain: "hall-automation-da918.firebaseapp.com",
          databaseURL: "https://hall-automation-da918-default-rtdb.firebaseio.com",
          projectId: "hall-automation-da918",
          storageBucket: "hall-automation-da918.appspot.com",
          messagingSenderId: "57900134656",
          appId: "1:57900134656:web:e6373f5c2173245102c3e5"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        import{getDatabase,ref,get,set,child,update,remove} 
        from  "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
        const db = getDatabase();  //connection initiallised

        // variable initialisation it gets values from the forms
        var  sid = document.getElementById("sid"); 
        var  hall = document.getElementById("hall");
        var  dt = document.getElementById("dt");
        var  ftime = document.getElementById("ftime");
        var  ttime = document.getElementById("ttime");

        //------------------------------CRUD Functions-------------------------------------------------------
        
        //insert function
        function insertdata(){
            set(ref(db,"Booking/"+sid.value),{
                StaffId: sid.value,
                hallno: hall.value,
                date:dt.value,
                fromtime: ftime.value,
                totime: ttime.value
            })
            //prompt with error
            .then(()=>{
                alert("data added sucessfully");
            })
            .catch((error)=>{
                alert("unsuccess, error"+error);
            });
        }

        //select function
        function  selectdata(){
            const dbref=ref(db);
            get(child(dbref,"Booking/"+sid.value)).then((snapshot)=>{
                if(snapshot.exists()){
                    sid.value=snapshot.val().StaffId;
                    hall.value=snapshot.val().hallno;
                    dt.value=snapshot.val().date;
                    ftime.value=snapshot.val().fromtime;
                    ttime.value=snapshot.val().totime;
                    
                }
            })
            //prompt with error
            .catch((error)=>{
                alert("unsuccess, error"+error);
            });
        }

        //update function
        function updatedata(){
            update(ref(db,"Booking/"+sid.value),{
               
                hallno: hall.value,
                date:dt.value,
                fromtime: ftime.value,
                totime: ttime.value
            })
            //prompt with error
            .then(()=>{
                alert("data updated sucessfully");
            })
            .catch((error)=>{
                alert("unsuccess, error"+error);
            });
        }
        //delete function
        function deletedata(){
            remove(ref(db,"Booking/"+sid.value))
            //prompt with error
            .then(()=>{
                alert("data removed sucessfully");
            })
            .catch((error)=>{
                alert("unsuccess, error"+error);
            });
        }
         
        //adding function to button
        insbt.addEventListener('click',insertdata); 
        selbt.addEventListener('click',selectdata); 
        updbt.addEventListener('click',updatedata); 
        delbt.addEventListener('click',deletedata); 
