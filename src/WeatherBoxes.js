function WeatherBoxes(){
    return()
        <>
        *{background-color: aquamarine;}
        body{
         width: 50%;
         height: 50%;
         border: 1px solid black;
         margin: 50px;
         display: grid;
         grid-template-columns: repeat(3,200px);
         grid-template-rows: auto;
         grid-row-gap:10px;
         grid-column-gap:10px;
        }
        .box1{ background-color: red;}
        .box2{ background-color: green;}
        .box3{ background-color: blue;}
        .box4{ background-color:pink;}
        .box5{ background-color: brown;}
        .box6{ background-color: yellow;}
          
        <div class="box1" id="box1"></div>
        <div class="box2" id="box2"></div>
        <div class="box3" id="box3"></div>
        <div class="box4" id="box4"></div>
        <div class="box5" id="box5"></div>
        <div class="box6" id="box6"></div>
        </>
    )
}
export default WeatherBoxes;