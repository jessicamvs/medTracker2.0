if (localStorage.drugArray) {
  medications = JSON.parse(localStorage.getItem('drugArray'));
} else {
  medications = [];
}

Medication.clearFields = function() {
  $('#medName').val('');
  $('#docName').val('');
  $('#dose').val('');
  $('#dosageType').val('');
  $('#quantity').val('');
  $('#startDate').val('');
  $('#duration').val('');
  $('#intervalTake').val('');
  $('#firstTake').val('');
  $('#food').val('');
  $('#numRefills').val('');
  $('#pharmName').val('');
  $('#pharmNumber').val('');
  $('#noLongerTaking').prop('checked', false);
  $('#addSched').prop('checked', false);
  $('#medNotes').val('');
};

Medication.newMedication = function() {
  var formEl = $('#medForm').on('click', '#save', function(e) {
    console.log('running newMedication');
    e.preventDefault();
    var newName = $('#medName').val().charAt(0).toUpperCase() + $('#medName').val().slice(1).toLowerCase();
    var newPrescriber = $('#docName').val();
    var newDosage = $('#dose').val();
    var newDoseType = $('#dosageType').val();
    var newQuantity = $('#quantity').val();
    var newStart = $('#startDate').val();
    var newDuration = $('#duration').val();
    var newIntervals = $('#intervalTake').val();
    var newFirst = $('#firstTake').val();
    var newFood = $('#food').val();
    var newNumRefills = $('#numRefills').val();
    var newPharmName = $('#pharmName').val();
    var newPharmPhone = $('#pharmNumber').val();
    var newTaking = $('#noLongerTaking').is(':checked');
    var newAddCurrSched = $('#addSched').is(':checked');
    var newNotes = $('#medNotes').val();
    var newDrug = new Medication(newName, newPrescriber, newDosage, newDoseType, newQuantity, newStart, newDuration, newIntervals, newFirst, newFood, newNumRefills, newPharmName, newPharmPhone, newTaking, newAddCurrSched, newNotes);
    console.log(newDrug);
    Medication.clearFields();
    if(localStorage.todaysMedsStored) {
      if(newDrug.taking === false) {
        var todaysMeds = JSON.parse(localStorage.getItem('todaysMedsStored'));
        console.log('today meds are' + todaysMeds);
        todaysMeds.push(newDrug);
        localStorage.setItem('todaysMedsStored', JSON.stringify(todaysMeds));
      }
    }
    var jsonMed = JSON.stringify(medications);
    console.log(jsonMed);
    localStorage.setItem('drugArray', jsonMed);
  });
};

Medication.renderEditFields = function () {
  if(localStorage.drugArray && localStorage.medClicked) {
    drugNameClicked = JSON.parse(localStorage.getItem('medClicked'));
    medName.value = drugNameClicked.name;
    docName.value = drugNameClicked.prescriber;
    dose.value = drugNameClicked.dosage;
    dosageType.value = drugNameClicked.doseType;
    quantity.value = drugNameClicked.quantity;
    startDate.value = drugNameClicked.start;
    duration.value = drugNameClicked.duration;
    intervalTake.value = drugNameClicked.intervals;
    firstTake.value = drugNameClicked.first;
    foodInstructions.value = drugNameClicked.food;
    numRefills.value = drugNameClicked.numRefills;
    pharmName.value = drugNameClicked.pharmName;
    pharmNumber.value = drugNameClicked.pharmPhone;
    noLongerTaking.checked = drugNameClicked.taking;
    addSched.checked = drugNameClicked.addCurrSched;
    medNotes.value = drugNameClicked.notes;
    localStorage.removeItem('medClicked');
  }
};

Medication.renderEditFields();
Medication.newMedication();
