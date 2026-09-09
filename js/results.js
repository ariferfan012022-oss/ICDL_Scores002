/* =========================================
   ICDL STUDENT RESULTS
========================================= */

// ============================================
// ICDL STUDENT RESULTS DATABASE
// ============================================

// =====================================================
// ICDL STUDENT RESULTS SYSTEM
// Positive Life Academy ICDL Center
// =====================================================


// =====================================================
// STUDENT DATABASE
// =====================================================

const students = {

    "ICDL-2026-001": {
        name: "Zahra",
        lastName: "AliZada",
        id: "ICDL-2026-001",

        modules: [
            { name: "Windows", score: 96 },
            { name: "MS Word", score: 96 },
            { name: "MS Excel", score: 98 },
            { name: "MS PowerPoint", score: 100 },
            { name: "Typing Project", score: 100 }
        ],

        average: 98,
        grade: "A",
        state: "Passed"
    },


    "ICDL-2026-002": {
        name: "Raihana",
        lastName: "Madadi",
        id: "ICDL-2026-002",

        modules: [
            { name: "Windows", score: 90 },
            { name: "MS Word", score: 97 },
            { name: "MS Excel", score: 0 },
            { name: "MS PowerPoint", score: 0 },
            { name: "Typing Project", score: 100 }
        ],

        average: 57.4,
        grade: "Try Better",
        state: "Passed"
    },


    "ICDL-2026-003": {
        name: "Amina",
        lastName: "Aawhadi",
        id: "ICDL-2026-003",

        modules: [
            { name: "Windows", score: 98 },
            { name: "MS Word", score: 100 },
            { name: "MS Excel", score: 99 },
            { name: "MS PowerPoint", score: 100 },
            { name: "Typing Project", score: 100 }
        ],

        average: 99.4,
        grade: "A",
        state: "Passed"
    },


    "ICDL-2026-004": {
        name: "Sharifa",
        lastName: "Merzayee",
        id: "ICDL-2026-004",

        modules: [
            { name: "Windows", score: 97 },
            { name: "MS Word", score: 99 },
            { name: "MS Excel", score: 99 },
            { name: "MS PowerPoint", score: 100 },
            { name: "Typing Project", score: 100 }
        ],

        average: 99,
        grade: "A",
        state: "Passed"
    },


    "ICDL-2026-005": {
        name: "Aqila",
        lastName: "Zahedi",
        id: "ICDL-2026-005",

        modules: [
            { name: "Windows", score: 100 },
            { name: "MS Word", score: 100 },
            { name: "MS Excel", score: 0 },
            { name: "MS PowerPoint", score: 0 },
            { name: "Typing Project", score: 0 }
        ],

        average: 40,
        grade: "Failed",
        state: "Failed"
    },


    "ICDL-2026-006": {
        name: "Samira",
        lastName: "Hassani",
        id: "ICDL-2026-006",

        modules: [
            { name: "Windows", score: 96 },
            { name: "MS Word", score: 85 },
            { name: "MS Excel", score: 80 },
            { name: "MS PowerPoint", score: 90 },
            { name: "Typing Project", score: 100 }
        ],

        average: 90.2,
        grade: "A",
        state: "Passed"
    },


    "ICDL-2026-007": {
        name: "Bilal",
        lastName: "Mussawi",
        id: "ICDL-2026-007",

        modules: [
            { name: "Windows", score: 95 },
            { name: "MS Word", score: 99 },
            { name: "MS Excel", score: 95 },
            { name: "MS PowerPoint", score: 99 },
            { name: "Typing Project", score: 100 }
        ],

        average: 97.6,
        grade: "A",
        state: "Passed"
    },


    "ICDL-2026-008": {
        name: "Halima",
        lastName: "Khaliqi",
        id: "ICDL-2026-008",

        modules: [
            { name: "Windows", score: 100 },
            { name: "MS Word", score: 95 },
            { name: "MS Excel", score: 96 },
            { name: "MS PowerPoint", score: 99 },
            { name: "Typing Project", score: 90 }
        ],

        average: 96,
        grade: "A",
        state: "Passed"
    },


    "ICDL-2026-009": {
        name: "Rahima",
        lastName: "Hussaini",
        id: "ICDL-2026-009",

        modules: [
            { name: "Windows", score: 96 },
            { name: "MS Word", score: 99 },
            { name: "MS Excel", score: 96 },
            { name: "MS PowerPoint", score: 100 },
            { name: "Typing Project", score: 100 }
        ],

        average: 98.2,
        grade: "A",
        state: "Passed"
    },


    "ICDL-2026-010": {
        name: "Hakima",
        lastName: "Khalili",
        id: "ICDL-2026-010",

        modules: [
            { name: "Windows", score: 95 },
            { name: "MS Word", score: 90 },
            { name: "MS Excel", score: 0 },
            { name: "MS PowerPoint", score: 0 },
            { name: "Typing Project", score: 95 }
        ],

        average: 56,
        grade: "Try Better",
        state: "Passed"
    },


    "ICDL-2026-011": {
        name: "Shukria",
        lastName: "Ahmadi",
        id: "ICDL-2026-011",

        modules: [
            { name: "Windows", score: 95 },
            { name: "MS Word", score: 93 },
            { name: "MS Excel", score: 0 },
            { name: "MS PowerPoint", score: 0 },
            { name: "Typing Project", score: 100 }
        ],

        average: 57.6,
        grade: "Try Better",
        state: "Passed"
    },


    "ICDL-2026-012": {
        name: "Raihana",
        lastName: "Samimi",
        id: "ICDL-2026-012",

        modules: [
            { name: "Windows", score: 83 },
            { name: "MS Word", score: 87 },
            { name: "MS Excel", score: 70 },
            { name: "MS PowerPoint", score: 90 },
            { name: "Typing Project", score: 95 }
        ],

        average: 85,
        grade: "B",
        state: "Passed"
    }

};


// =====================================================
// SEARCH STUDENT RESULT
// =====================================================

function searchResult() {

    const input = document.getElementById("studentId");
    const errorMessage = document.getElementById("errorMessage");
    const resultSection = document.getElementById("resultSection");

    if (!input) {
        console.error("Student ID input was not found.");
        return;
    }

    const studentId = input.value.trim().toUpperCase();


    // Empty input
    if (studentId === "") {

        if (errorMessage) {

            errorMessage.innerHTML = `
                <i class="bi bi-exclamation-circle"></i>
                Please enter your Student ID.
            `;

            errorMessage.classList.remove("d-none");
        }

        if (resultSection) {
            resultSection.classList.add("d-none");
        }

        return;
    }


    // Find student
    const student = students[studentId];


    // Student not found
    if (!student) {

        if (errorMessage) {

            errorMessage.innerHTML = `
                <i class="bi bi-exclamation-circle"></i>
                Student ID <strong>${studentId}</strong>
                was not found.
            `;

            errorMessage.classList.remove("d-none");
        }

        if (resultSection) {
            resultSection.classList.add("d-none");
        }

        return;
    }


    // Student found
    if (errorMessage) {
        errorMessage.classList.add("d-none");
    }


    displayResult(student);


    if (resultSection) {
        resultSection.classList.remove("d-none");
    }


    // Hide other sections
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const contact = document.getElementById("contact");

    if (home) {
        home.classList.add("d-none");
    }

    if (about) {
        about.classList.add("d-none");
    }

    if (contact) {
        contact.classList.add("d-none");
    }


    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =====================================================
// DISPLAY STUDENT RESULT
// =====================================================

function displayResult(student) {

    // ---------------------------------------------
    // Student Name
    // ---------------------------------------------

    const resultName = document.getElementById("resultName");

    if (resultName) {
        resultName.textContent =
            student.name + " " + student.lastName;
    }


    // ---------------------------------------------
    // Student ID
    // ---------------------------------------------

    const resultId = document.getElementById("resultId");

    if (resultId) {
        resultId.textContent = student.id;
    }


    // ---------------------------------------------
    // Center Name
    // ---------------------------------------------

    const resultCenter = document.getElementById("resultCenter");

    if (resultCenter) {
        resultCenter.textContent =
            "Positive Life Academy";
    }


    // ---------------------------------------------
    // Module Results
    // ---------------------------------------------

    const moduleResults =
        document.getElementById("moduleResults");


    if (moduleResults) {

        moduleResults.innerHTML = "";


        student.modules.forEach(function (module, index) {

            const row = document.createElement("tr");

            const passed = module.score >= 60;


            row.innerHTML = `

                <td>
                    ${index + 1}
                </td>

                <td>
                    ${module.name}
                </td>

                <td>
                    <strong>
                        ${module.score}%
                    </strong>
                </td>

                <td>

                    <span class="${
                        passed
                            ? "status-pill"
                            : "status-pill failed"
                    }">

                        ${
                            passed
                                ? "Passed"
                                : "Failed"
                        }

                    </span>

                </td>
            `;


            moduleResults.appendChild(row);

        });

    }


    // ---------------------------------------------
    // Overall Score
    // ---------------------------------------------

    const overallScore =
        document.getElementById("overallScore");

    if (overallScore) {

        overallScore.textContent =
            student.average + "%";

    }


    // ---------------------------------------------
    // Average Score
    // ---------------------------------------------

    const averageScore =
        document.getElementById("averageScore");

    if (averageScore) {

        averageScore.textContent =
            student.average + "%";

    }


    // ---------------------------------------------
    // Total Modules
    // ---------------------------------------------

    const totalModules =
        document.getElementById("totalModules");

    if (totalModules) {

        totalModules.textContent =
            student.modules.length;

    }


    // ---------------------------------------------
    // Status
    // ---------------------------------------------

    const status =
        document.getElementById("status");

    if (status) {

        status.textContent =
            student.state.toUpperCase();

    }


    // ---------------------------------------------
    // Grade
    // ---------------------------------------------

    const studentGrade =
        document.getElementById("studentGrade");

    if (studentGrade) {

        studentGrade.textContent =
            student.grade;

    }


    // ---------------------------------------------
    // Status Badge
    // ---------------------------------------------

    const badge =
        document.querySelector(".passed-badge");


    // ---------------------------------------------
    // Overall Score Box
    // ---------------------------------------------

    const scoreBox =
        document.querySelector(".overall-score");


    if (student.state === "Passed") {

        if (badge) {

            badge.style.background =
                "#1ba46e";

        }

        if (scoreBox) {

            scoreBox.style.background =
                "#effbf5";

        }

    }
    else {

        if (badge) {

            badge.style.background =
                "#dc3545";

        }

        if (scoreBox) {

            scoreBox.style.background =
                "#fff3f3";

        }

    }

}


// =====================================================
// BACK TO SEARCH
// =====================================================

function backToSearch() {

    const resultSection =
        document.getElementById("resultSection");

    const home =
        document.getElementById("home");

    const about =
        document.getElementById("about");

    const contact =
        document.getElementById("contact");

    const studentId =
        document.getElementById("studentId");


    if (resultSection) {
        resultSection.classList.add("d-none");
    }


    if (home) {
        home.classList.remove("d-none");
    }


    if (about) {
        about.classList.remove("d-none");
    }


    if (contact) {
        contact.classList.remove("d-none");
    }


    if (studentId) {

        studentId.value = "";

        studentId.focus();

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =====================================================
// ENTER KEY SEARCH
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const input =
            document.getElementById("studentId");


        if (input) {

            input.addEventListener(
                "keydown",
                function (event) {

                    if (event.key === "Enter") {

                        event.preventDefault();

                        searchResult();

                    }

                }
            );

        }


        // Debug message
        console.log(
            "ICDL Results System loaded successfully."
        );

        console.log(
            "Total students:",
            Object.keys(students).length
        );

    }
);


// =====================================================
// PRINT RESULT
// =====================================================

function printResult() {

    window.print();

}


// =====================================================
// DOWNLOAD CERTIFICATE
// =====================================================

function downloadCertificate() {

    alert(
        "Certificate download will be available soon."
    );

}


// =====================================================
// OPTIONAL: SEARCH BY STUDENT NAME
// =====================================================

function searchByName(name) {

    const searchName =
        name.trim().toLowerCase();


    if (searchName === "") {
        return null;
    }


    for (const id in students) {

        const student = students[id];


        const fullName =
            (
                student.name +
                " " +
                student.lastName
            ).toLowerCase();


        if (fullName === searchName) {

            return student;

        }

    }


    return null;

}


// =====================================================
// END OF RESULTS.JS
// =====================================================


/* =========================================
   DOWNLOAD CERTIFICATE
========================================= */

function downloadCertificate() {

    alert(
        "Certificate download feature can be connected to a PDF certificate later."
    );

}