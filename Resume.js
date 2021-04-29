function addNewWEfield(){
    // alert("Hii")
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-1')
    // newNode.classList.add('mb-1')
    let weOb=document.getElementById('WE');
    let weAddButtonOb=document.getElementById("weAddButton");

    // weOb.InsertBefore(newNode,weAddButtonOb);
    weOb.insertBefore(newNode,weAddButtonOb)

}
function addNewAQfield(){
    // console.log("Hii")

    let newNode2=document.createElement('textarea')
    newNode2.classList.add('form-control')
    newNode2.classList.add('AQfield')
    newNode2.classList.add('mt-1')

    let AQOb=document.getElementById('AQ')
    let AQaddButtonOb=document.getElementById('aqAddButton')

    AQOb.insertBefore(newNode2,AQaddButtonOb)

}

// Generating CV
function generateCV(){
    // console.log("Hii")

    // for First name
    let nameField=document.getElementById('firstName').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;

    // for second name
    // let nameField2=document.getElementById("secondName").value;
    // let nameT2=document.getElementById("nameT2")


    // for contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    // for email
    document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;

    // for address
    // let addressField=document.getElementById("addressField").value;
    // let addressT=document.getElementById("addressT");
    // addressT.innerHTML=addressField;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    // for Facebook
    // let facebookField=document.getElementById("facebookField").value
    // let fbT=document.getElementById("fbT")
    // fbT.innerHTML=facebookField;
    document.getElementById("fbT").innerHTML=document.getElementById("facebookField").value;

    // document.getElementById("fbT").innerHTML=document.getElementById("facebookField").value;

    // for instagram
    // let instaField=document.getElementById("InstagramField").value;
    // let instaT=document.getElementById("instaT")
    // instaT.innerHTML=instaField;
    document.getElementById("instaT").innerHTML=document.getElementById("InstagramField").value;

    // for YouTube

    // let ytField=document.getElementById("YoutubeField").value;
    // let ytT=document.getElementById("ytT")
    // ytT.innerHTML=ytField;
    document.getElementById("ytT").innerHTML=document.getElementById("YoutubeField").value;


    // Objective**
    // let Objective=document.getElementById("objectiveField").value;
    // let oT=document.getElementById("objectiveT");
    // oT.innerHTML=Objective;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;


    // work Experienced
    let wes=document.getElementsByClassName("weField");
    let str=""
    for(let e of wes){
        str=str+`<li> ${e.value} </li>`
    }
    document.getElementById("weT").innerHTML=str;

    // for Academic qualification
    let aqs=document.getElementsByClassName("AQfield")
    let str1=""
    for(let e of aqs){
        str1=str1+`<li> ${e.value} </li>`
    }
    document.getElementById("aqT").innerHTML=str1;

    // code for setting image
    let file=document.getElementById("imgField").files[0];
    console.log(file)
    let reader=new FileReader()
    reader.readAsDataURL(file);

    // set the image to template
    
    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    }


    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display="block";

}
function printCV(){
    window.print();
}