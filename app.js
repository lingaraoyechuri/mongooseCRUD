const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//creating subjectSchema

const subjectSchema = new mongoose.Schema ({
      name: {
       type: String,
       required: true
  }
});

// creating Subject model
const Subject = mongoose.model('Subject', subjectSchema);

// creating student model
const Student = mongoose.model('Student', {
   name: {
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true,
    min: [6, 'to young as a student'],
    max: 60
  },
  education: {
    type: String
  },
  currentSubjects: subjectSchema

});




const java = new Subject({name:'java'})
java.save();

const lingaraoyechuri = new Student({ name: 'yechurilingaraotest', age:19, education:'Masters', currentSubjects:java });
const teja = new Student({ name: 'teja', age:23});
const hanu = new Student({ name: 'hanu', age:28});
const sathi = new Student({ name: 'sathi', age:27});

//for inserting single user date
lingaraoyechuri.save().then(() => console.log('saved'));

//for inserting multiple user data

// Student.insertMany([linga, teja, hanu, sathi], function(err) {
//   if(err){
//     console.log(err);
//   }else {
//     console.log("sucess");
//   }
//
// })

// for finding data from document

// Student.find(function(err, students){
//   if(err){
//     console.log(err);
//   }else {
//     students.forEach((item, i) => {
//       console.log(item.name);
//       console.log(i);
//     });

    //console.log(students);
//  }
//})


// for updating data

// Student.updateOne({_id :"600b7665267b38111cf6f50f"}, {$set: {name:"nameChanged"}},function(err){
//     if(err){
//       console.log(err);
//     }else {
//
//         console.log("updated");
//       }
// } );


// for deleting data
// Student.deleteOne({ name: 'nameChanged' }, function(err){
//     if(err){
//       console.log(err);
//     }else {
//
//         console.log("done!");
//       }
// });
