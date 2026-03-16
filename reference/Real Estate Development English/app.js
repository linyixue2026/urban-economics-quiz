document.addEventListener('DOMContentLoaded', () => {
    const studentInput = document.getElementById('studentId');
    const suggestionsBox = document.getElementById('suggestions');
    const studentInfoBox = document.getElementById('studentInfo');
    const studentNameDisplay = document.getElementById('studentNameDisplay');
    const btnPractice = document.getElementById('btnPractice');
    const btnQuiz = document.getElementById('btnQuiz');

    // Use local data if available (bypasses CORS when running from file://)
    let students = (typeof STUDENT_DATA !== 'undefined') ? STUDENT_DATA : [];
    let selectedStudent = null;

    if (students.length === 0) {
        console.warn('STUDENT_DATA not found in window scope, attempting fetch as backup...');
        fetch('students.json')
            .then(response => response.json())
            .then(data => {
                students = data;
                console.log('Students loaded via fetch:', students.length);
            })
            .catch(err => {
                console.error('Initial data load failed. Please ensure students.js is linked correctly.', err);
            });
    } else {
        console.log('Students loaded from students.js:', students.length);
    }

    // Handle input
    studentInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        resetSelection();

        if (query.length < 2) {
            suggestionsBox.classList.remove('active');
            return;
        }

        const matches = students.filter(s => s.id.includes(query));
        renderSuggestions(matches);
    });

    // Render suggestions
    function renderSuggestions(matches) {
        suggestionsBox.innerHTML = '';
        if (matches.length > 0) {
            matches.forEach(student => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.innerHTML = `<strong>${student.id}</strong> <span>${student.name}</span>`;
                div.addEventListener('click', () => selectStudent(student));
                suggestionsBox.appendChild(div);
            });
            suggestionsBox.classList.add('active');
        } else {
            suggestionsBox.classList.remove('active');
        }
    }

    // Select student
    function selectStudent(student) {
        selectedStudent = student;
        studentInput.value = student.id;
        suggestionsBox.classList.remove('active');

        // Show confirmation
        studentNameDisplay.textContent = `${student.name} (${student.id})`;
        studentInfoBox.classList.add('active');

        // Enable buttons
        btnPractice.disabled = false;
        btnQuiz.disabled = false;

        // Save to current session (logic placeholder)
        localStorage.setItem('currentUser', JSON.stringify(student));
    }

    // Reset selection state
    function resetSelection() {
        selectedStudent = null;
        studentInfoBox.classList.remove('active');
        btnPractice.disabled = true;
        btnQuiz.disabled = true;
        localStorage.removeItem('currentUser');
    }

    // Navigation Logic
    btnPractice.addEventListener('click', () => {
        if (!selectedStudent) return;
        // Mode 0: Practice (Unlimited, Show Answers)
        window.location.href = `quiz.html?mode=practice`;
    });

    btnQuiz.addEventListener('click', () => {
        if (!selectedStudent) return;
        // Mode 1: Quiz (Once, Hide Answers)
        window.location.href = `quiz.html?mode=quiz`;
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.input-group')) {
            suggestionsBox.classList.remove('active');
        }
    });
});
