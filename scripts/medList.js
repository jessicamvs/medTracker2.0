(function(module) {
  var Medication = {};
  var totalListTable = $('#theTable');
  var drugName = $(document.createElement('td'));
  var doseData = $(document.createElement('td'));
  var doseType = $(document.createElement('td'));
  var amountLeft = $(document.createElement('td'));
  var medRows = document.createElement('tr');

  if (localStorage.drugArray) {
    medications = JSON.parse(localStorage.getItem('drugArray'));
    console.log(medications);
  } else {
    medications = [];
  }

  Medication.buildTable = function() {
    $('#theTable').append(medRows);
    console.log('appended medRows');
  };

  Medication.populateCurrTable = function() {
    // for(medication in medications){
    for (i = 0; i < medications.length; i++) {
      if(medications[i].taking === false) {
        medRows.id = medications[i].name;
        // medRows.appendChild(drugName);
        // console.log('running populateCurrTable');
        drugName.html = '<a href="addmed.html" id=' + medications[i].name + '>' + medications[ i].name.charAt(0).toUpperCase() + medications[i].name.slice(1) + '</a>';
        console.log('drugname is' + drugName);
      };
      doseData.textContent = medications[medication].dosage;
      console.log('dosage is' + doseData);
      doseType.text = medications[medication].doseType;
      console.log('dose type is' + doseType);
      amountLeft.text = medications[medication].pillsLeft;
      console.log('amount remaining is' + amountLeft);
      Medication.buildTable();

    };
  };


  function myFunction(alpha, beta) {};


  Medication.renderCurrTable = function () {
    if(localStorage.drugArray){
      medications = JSON.parse(localStorage.getItem('drugArray'));
      var theTable = $(document.createElement('table'));
      console.log('created the table');
      //creates the initial table
      // $('APPEND THE TABLE TO THE SECTION ID IN HTML').append(theTable);
      var tableHeaders = "<tr class='headerRow'><th id='header1' >Medication Name</th><th id= 'header2'>Dosage</th><th id='doseType'>Dose Type</th><th id='header3'>Pills Left</th></tr>";
      // $('TABLE ID FROM HTML HERE').append(tableHeaders);
      $('#theTable').append(tableHeaders);
      Medication.populateCurrTable();
      console.log('called populateCurrTable');


    }
  };
  //         medRows.appendChild(doseData);
  //         medRows.appendChild(doseTypeData);
  //         medRows.appendChild(amountLeft);
  //         var deleteMed = document.createElement('td');
  //         var remove = document.createElement('a');
  //         var linkText = document.createTextNode('Remove');
  //         remove.id = medications[medication].name + 'remove';
  //         remove.appendChild(linkText);
  //         deleteMed.appendChild(remove);
  //         remove.title = 'Remove';
  //         remove.href = '';
  //         medRows.appendChild(deleteMed);
  //         totalListTable.appendChild(medRows);
  //       };
  //     };
  //   };
  // };

  //listening for a click on the med name to view prepopulated fields
  // totalListTable.addEventListener('click', function(event) {
  //   for(obj in medications) {
  //     if (event.target.id === medications[obj].name) {
  //       var jsonDrugClicked = JSON.stringify(medications[obj]);
  //       localStorage.setItem('medClicked', jsonDrugClicked);
  //     };
  //   }
  // });

  //listening for a click on the remove to remove item from the list.
  // totalListTable.addEventListener('click', function(event){
  //   for(obj in medications) {
  //     if(event.target.id === medications[obj].name + 'remove') {
  //       medications[obj].taking = true;
  //       var takenChanged = JSON.stringify(medications);
  //       localStorage.setItem('drugArray', takenChanged);
  //     };
  //   };
  // });


  $(document).ready(function() {
    Medication.renderCurrTable();
  });

  module.Medication = Medication;
})(window);



//
//                                 //SEPARATE FUNCTION FOR THESE
//
//         var deleteMed = document.createElement('td');
//         var remove = document.createElement('a');
//         var linkText = document.createTextNode('Remove');
//         remove.id = medications[medication].name + 'remove';
//         remove.appendChild(linkText);
//         deleteMed.appendChild(remove);
//         remove.title = 'Remove';
//         remove.href = '';
//         medRows.appendChild(deleteMed);
//         totalListTable.appendChild(medRows);`
