const fs=require('fs');
const path=require('path');

// fs.mkdir(path.join(__dirname,'/Newfile'), {}, err =>{
//     if(err) throw err;
//     console.log('Created new file');
// });



// fs.writeFile(path.join(__dirname,'/Newfile','Content.js'),'Hiiiiii,' , err =>{
//     if(err) throw err;
//     console.log('file written to....');

//     fs.appendFile(path.join(__dirname,'/Newfile','Content.js'),'Helllooo' , err =>{

//         if(err) throw err;
//         console.log('appended');
//     });
// });



// fs.readFile(path.join(__dirname,'/Newfile','Content.js'), 'utf8', (err,data) =>{
//     if(err) throw err;
//     console.log(data);
// });


fs.rename(path.join(__dirname,'/Newfile','Content.js'),
         path.join(__dirname,'/Newfile','Content2.js'),
         err =>{
    if(err) throw err;
    console.log('Renamed');
});



