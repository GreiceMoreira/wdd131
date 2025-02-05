const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }],
    enrollStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            showSections(this.sections);
        }
    },
    dropStudent: function (sectionNum){
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
          );
          if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            showSections(this.sections);
          }
    }
};

const setNameAndCode = (aCourse) => {
    document.querySelector('#courseCode').innerHTML = aCourse.code;
    document.querySelector('#courseName').innerHTML = aCourse.name;
};


const showSections = (course) => {
    const tableBody = document.querySelector("#sections");
    tableBody.innerHTML = ""; 

    const rows = course.sections.map(section => `
        <tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>
    `).join(""); 
    tableBody.innerHTML = rows;
};






setNameAndCode(aCourse);
showSections(aCourse);
