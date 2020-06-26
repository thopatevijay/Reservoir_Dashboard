// Express Framework
const express = require('express');

// for fetching fetch function
const fetch = require('node-fetch');

// For passing fetched html result through DOM
const jsdom = require("jsdom");

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.set('views','./src/views');
app.set('view engine','ejs');

// defining PORT
app.listen(3000, () => console.log('listening at 3000'));


// Defining Router 
app.get('/dashboard', async (req,res) => {

    // Retrieving data from dam URL. 
    let damAPI = {
        ChimoniAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=12",
        ChulliyarAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=17",
        KalladaAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=7",
        KanjirapuzhaAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=20",
        KarapuzhaAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=22",
        KuttiadyAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=6",
        MalampuzhaAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=1",
        MalankaraAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=26",
        MangalamAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=14",
        MeenkaraAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=16",
        MoolatharaAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=19",
        NeyyarAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=4",
        PambaAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=8",
        PazhassiAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=5",
        PeechiAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=13",
        PeriyarAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=9",
        PothundyAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=15",
        SiruvaniAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=21",
        VazhaniAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=11",
        WalayarAPI_URL : "http://idrb.kerala.gov.in/idrb/irrigation_html_disp/main_fr.php?d_cd=18",
    }
    // Calling setup function that contains API results and processes.
    setup(); 
    
    // async function for fetching data from Dam API.                                                                                                       
    
    async function damData_async_fetch(){
    
         // Fetching chimoni data :
         let ChimoniResponse = await fetch(damAPI.ChimoniAPI_URL);
         let ChimoniData = await ChimoniResponse.text();
    
         // Fetching Chulliyar Data :
         let ChulliyarResponse = await fetch(damAPI.ChulliyarAPI_URL);
         let ChulliyarData = await ChulliyarResponse.text();
    
         // Fetching Kallada Data :
         let KalladaResponse = await fetch(damAPI.KalladaAPI_URL);
         let KalladaData = await KalladaResponse.text();
    
         // Fetching Kanjirapuzha Data :
         let KanjirapuzhaResponse = await fetch(damAPI.KanjirapuzhaAPI_URL);
         let KanjirapuzhaData = await KanjirapuzhaResponse.text();
    
         // Fetching Karapuzha data :
         let KarapuzhaResponse = await fetch(damAPI.KarapuzhaAPI_URL);
         let KarapuzhaData = await KarapuzhaResponse.text();
    
         // Fetching Kuttiady Data :
         let KuttiadyResponse = await fetch(damAPI.KuttiadyAPI_URL);
         let KuttiadyData = await KuttiadyResponse.text();
    
         // Fetching Malampuzha Data :
         let MalampuzhaResponse = await fetch(damAPI.MalampuzhaAPI_URL);
         let MalampuzhaData = await MalampuzhaResponse.text();
    
         // Fetching Malankara Data :
         let MalankaraResponse = await fetch(damAPI.MalankaraAPI_URL);
         let MalankaraData = await MalankaraResponse.text();
    
          // Fetching Mangalam data :
        let MangalamResponse = await fetch(damAPI.MangalamAPI_URL);
        let MangalamData = await MangalamResponse.text();
    
        // Fetching Meenkara Data :
        let MeenkaraResponse = await fetch(damAPI.MeenkaraAPI_URL);
        let MeenkaraData = await MeenkaraResponse.text();
    
        // Fetching Moolathara Data :
        // let MoolatharaResponse = await fetch(damAPI.MoolatharaAPI_URL);
        // let MoolatharaData = await MoolatharaResponse.text();
    
        // Fetching Neyyar Data :
        let NeyyarResponse = await fetch(damAPI.NeyyarAPI_URL);
        let NeyyarData = await NeyyarResponse.text();
    
         // Fetching Pamba data :
         let PambaResponse = await fetch(damAPI.PambaAPI_URL);
         let PambaData = await PambaResponse.text();
    
         // Fetching Pazhassi Data :
         let PazhassiResponse = await fetch(damAPI.PazhassiAPI_URL);
         let PazhassiData = await PazhassiResponse.text();
    
         // Fetching Peechi Data :
         let PeechiResponse = await fetch(damAPI.PeechiAPI_URL);
         let PeechiData = await PeechiResponse.text();
    
         // Fetching Periyar Data :
         let PeriyarResponse = await fetch(damAPI.PeriyarAPI_URL);
         let PeriyarData = await PeriyarResponse.text();
    
          // Fetching Pothundy data :
        let PothundyResponse = await fetch(damAPI.PothundyAPI_URL);
        let PothundyData = await PothundyResponse.text();
    
        // Fetching Siruvani Data :
        let SiruvaniResponse = await fetch(damAPI.SiruvaniAPI_URL);
        let SiruvaniData = await SiruvaniResponse.text();
    
        // Fetching Vazhani Data :
        let VazhaniResponse = await fetch(damAPI.VazhaniAPI_URL);
        let VazhaniData = await VazhaniResponse.text();
    
        // Fetching Walayar Data :
        let WalayarResponse = await fetch(damAPI.WalayarAPI_URL);
        let WalayarData = await WalayarResponse.text();
    
    
        return { 
            ChimoniResult : ChimoniData,  
            ChulliyarResult : ChulliyarData,
            KalladaResult : KalladaData,
            KanjirapuzhaResult : KanjirapuzhaData,
            KarapuzhaResult : KarapuzhaData,
            KuttiadyResult : KuttiadyData,
            MalampuzhaResult : MalampuzhaData,
            MalankaraResult : MalankaraData,
            MangalamResult : MangalamData,
            MeenkaraResult : MeenkaraData,
            // MoolatharaResult : MoolatharaData,
            NeyyarResult : NeyyarData,
            PambaResult : PambaData,
            PazhassiResult :PazhassiData,
            PeechiResult : PeechiData,
            PeriyarResult : PeriyarData,
            PothundyResult : PothundyData,
            SiruvaniResult : SiruvaniData,
            VazhaniResult : VazhaniData,
            WalayarResult : WalayarData
    
        }
    }
    
    // Processing on API result
    function setup(){
        // Calling async function
        damData_async_fetch() 
        .then(result => {
         
    
    //  Storing Rsult in Array
           let resultArray = [
               result.ChimoniResult,
               result.ChulliyarResult,
               result.KalladaResult,
               result.KanjirapuzhaResult,
               result.KarapuzhaResult,
               result.KuttiadyResult,
               result.MalampuzhaResult,
               result.MalankaraResult,
               result.MangalamResult,
               result.MeenkaraResult,
               result.NeyyarResult,
               result.PambaResult,
               result.PazhassiResult,
               result.PeechiResult,
               result.PeriyarResult,
               result.PothundyResult,
               result.SiruvaniResult,
               result.VazhaniResult,
               result.WalayarResult,
           ]
    
           let fetchingDOM = [];
    // Iterating result through JSDOM 
     for(i=0;i<resultArray.length;i++){
          fetchingDOM.push(new jsdom.JSDOM(resultArray[i]));
    }
    
    //  Storing per day water level 
     let dateWiseWaterLevel = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    //  Dates last five
    let dates = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    
    let domlength =[];
    let calculatedlength = [];
    
    let thisYearStorage = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    let lastYearStorage = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    
    //  Iterating table data through loop and checking whether last 5 days of data is present or not.
    //  If the table has data less than 5 days then loop will push '0' and 'No Data' as a value to the place of empty table data.
    for(let i=0;i<fetchingDOM.length;i++){
        domlength.push(fetchingDOM[i].window.document.querySelector('table').rows.length);
        calculatedlength.push( 6 - domlength[i])
    
        if(fetchingDOM[i].window.document.querySelector('table').rows.length == 6){
            for(j=1;j<6;j++){
                dateWiseWaterLevel[i].push(parseFloat(fetchingDOM[i].window.document.querySelector("table").rows[j].cells[2].innerHTML));
                dates[i].push(fetchingDOM[i].window.document.querySelector("table").rows[j].cells[1].innerHTML);
                
                // current year storage
                thisYearStorage[i].push(parseFloat(fetchingDOM[i].window.document.querySelector("table").rows[j].cells[3].innerHTML));
                lastYearStorage[i].push(parseFloat(fetchingDOM[i].window.document.querySelector("table").rows[j].cells[5].innerHTML));
    
    
            }  
        }else{
            for(r = 1;r <domlength[i]; r++){
                dateWiseWaterLevel[i].push(parseFloat(fetchingDOM[i].window.document.querySelector("table").rows[r].cells[2].innerHTML));
                dates[i].push(fetchingDOM[i].window.document.querySelector("table").rows[r].cells[1].innerHTML);

                // Last year storage
                thisYearStorage[i].push(parseFloat(fetchingDOM[i].window.document.querySelector("table").rows[r].cells[3].innerHTML));
                lastYearStorage[i].push(parseFloat(fetchingDOM[i].window.document.querySelector("table").rows[r].cells[5].innerHTML));
    
            }
            for(j=0;j<calculatedlength[i];j++){
                dateWiseWaterLevel[i].push(0) 
                dates[i].push('No Data');
    
                thisYearStorage[i].push(0);
                lastYearStorage[i].push(0);
             }
        }
    }
    
    // Fetching FRL and MWL Data
    // Second chart For FRL and MWL Data
    
                let FRLdata = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
                let MWLdata = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    
                for(j=1;j<2;j++){
                    for(i=0;i<fetchingDOM.length;i++){
                    let FRL = fetchingDOM[i].window.document.querySelectorAll("label")[4].innerHTML;
                    let MWL = fetchingDOM[i].window.document.querySelectorAll("label")[6].innerHTML;
                        FRLdata[i].push(parseFloat(FRL.slice(1,-1)));
                        MWLdata[i].push(parseFloat(MWL.slice(1,-1)));
                    }
                 }

    // console.table(dateWiseWaterLevel)
    // console.table(dates)
    // console.table(domlength)
    // console.table(calculatedlength)
    
    // console.log(thisYearStorage)        
    // console.log(lastYearStorage)        
     
        
        res.render('index',{ 
            allData : dateWiseWaterLevel,
            allDates : dates,
            FRLdata : FRLdata,
            MWLdata : MWLdata
        })
       })
      }
    })
    