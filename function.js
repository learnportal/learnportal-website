const correctAnswers = {
    'exponents1': 'D',
    'exponents2': 'A, B',
    'exponents3': 'x=3, 3',
    'exponents4': 'B',
    'exponents5': 'B',
    'exponents6': 'C',
    'exponents7': 'D',
    'exponents8': 'B',
    'exponents9': 'A',
    'exponents10': '52',
    'exponents11': 'D',
    'exponents12': 'A',
    'exponents13': 'A',
    'exponents14': 'A',
    'exponents15': 'A',
    'exponents16': 'x=3, 3',
    'exponents17': 'C',
    'exponents18': 'A',
    'exponents19': 'A',
    'exponents20': 'A',
    'exponents21': 'C',
    'exponents22': 'A',
    'exponents23': '1',
    'exponents24': 'A',
    'exponents25': 'B',
    'exponents26': 'C',
    'exponents27': 'A',
    'exponents28': 'D',
    'exponents29': 'C',
    'exponents30': '5',
    'exponents31': 'A',
    'exponents32': 'B',
    'exponents33': 'B',
    'exponents34': 'B',
    'exponents35': 'A',
    'exponents36': 'C',
    'exponents37': 'D',
    'exponents38': 'B',
    'exponents39': 'B',
    'exponents40': '368',
    'exponents41': 'D',
    'exponents42': 'D',
    'exponents43': 'D',
    'exponents44': 'C',
    'exponents45': 'C',
    'exponents46': 'B',
    'exponents47': 'C',
    'exponents48': 'A',
    'exponents49': 'B',
    'exponents50': '0',
    'absolute1': 'A',
    'absolute2': 'A',
    'absolute3': 'C',
    'absolute4': 'A',
    'absolute5': 'A',
    'absolute6': 'C',
    'absolute7': 'x=64, 64',
    'absolute8': 'A',
    'absolute9': 'B',
    'absolute10': 'A, B',
    'absolute11': 'A',
    'absolute12': 'D',
    'absolute13': 'A',
    'absolute14': 'E',
    'absolute15': 'B',
    'absolute16': 'A, D',
    'absolute17': 'D',
    'absolute18': 'C',
    'absolute19': 'B, D',
    'absolute20': '4, 2',
    'absolute21': 'D',
    'absolute22': 'D',
    'absolute23': 'A',
    'absolute24': 'A, B',
    'absolute25': '0',
    'absolute26': 'A',
    'absolute27': 'A, B',
    'absolute28': 'A, B',
    'absolute29': 'B',
    'absolute30': 'A',
    'absolute31': 'C',
    'absolute32': 'B',
    'absolute33': 'E',
    'absolute34': 'D',
    'absolute35': 'A',
    'absolute36': 'B',
    'absolute37': 'B',
    'absolute38': 'A',
    'absolute39': 'A',
    'absolute40': 'C',
    'absolute41': 'B',
    'absolute42': 'A',
    'absolute43': 'A',
    'absolute44': 'A',
    'absolute45': 'D',
    'absolute46': 'C',
    'absolute47': 'A',
    'absolute48': 'C',
    'absolute49': 'A',
    'absolute50': 'A',
    'proportion1': 'A',
    'proportion2': 'A',
    'proportion3': 'B',
    'proportion4': 'C',
    'proportion5': 'A',
    'proportion6': 'B',
    'proportion7': 'B',
    'proportion8': 'D',
    'proportion9': 'C',
    'proportion10': 'D',
    'proportion11': 'A',
    'proportion12': 'A',
    'proportion13': 'B',
    'proportion14': 'C',
    'proportion15': 'C',
    'proportion16': 'C',
    'proportion17': 'C',
    'proportion18': 'A',
    'proportion19': 'B',
    'proportion20': 'A',
    'proportion21': 'B',
    'proportion22': 'B',
    'proportion23': 'D',
    'proportion24': 'B',
    'proportion25': 'A',
    'proportion26': 'A',
    'proportion27': 'B',
    'proportion28': 'B',
    'proportion29': 'A',
    'proportion30': 'A',
    'proportion31': 'C',
    'proportion32': 'D',
    'proportion33': 'B',
    'proportion34': 'A',
    'proportion35': 'B',
    'proportion36': 'C',
    'proportion37': 'B',
    'proportion38': 'C',
    'proportion39': 'A',
    'proportion40': 'C',
    'proportion41': 'A',
    'proportion42': 'B',
    'proportion43': 'D',
    'proportion44': 'B',
    'proportion45': 'B',
    'proportion46': 'B',
    'proportion47': 'C',
    'proportion48': 'C',
    'proportion49': 'A',
    'proportion50': 'A',
    'percent1': 'D',
    'percent2': 'C',
    'percent3': 'A',
    'percent4': 'A',
    'percent5': 'C',
    'percent6': 'A',
    'percent7': 'B',
    'percent8': 'A',
    'percent9': 'A',
    'percent10': 'A',
    'percent11': 'A',
    'percent12': 'A',
    'percent13': 'B',
    'percent14': 'B',
    'percent15': 'A',
    'percent16': 'A',
    'percent17': 'A',
    'percent18': 'A',
    'percent19': 'D',
    'percent20': 'C',
    'percent21': 'D',
    'percent22': 'A',
    'percent23': 'A',
    'percent24': 'B',
    'percent25': 'D',
    'percent26': 'B',
    'percent27': 'A',
    'percent28': 'B',
    'percent29': 'C',
    'percent30': 'A',
    'percent31': 'A',
    'percent32': 'B',
    'percent33': 'C',
    'percent34': 'C',
    'percent35': 'A',
    'percent36': 'A',
    'percent37': 'B',
    'percent38': 'B',
    'percent39': 'C',
    'percent40': 'B',
    'percent41': 'A',
    'percent42': 'D',
    'percent43': 'B',
    'percent44': 'D',
    'percent45': 'B',
    'percent46': 'A',
    'percent47': 'C',
    'percent48': 'A',
    'percent49': 'D',
    'percent50': 'C'
    };

let currentTopicIndex = 0; // Reset to first topic or handle as desired.
let currentQuestionIndex = 1; // Start with the first question
const numberOfQuestions = 50; // Set the total number of questions
let isAnswerChecked = false; // False means no answer has been checked yet for the current question
let topics = [
    { slug: 'exponents-and-radicals', title: 'Exponents and Radicals' },
    { slug: 'absolute-value', title: 'Absolute Values' },
    { slug: 'proportion', title: 'Proportion' },
    { slug: 'percent', title: 'Percent' },
    { slug: 'unit-conversions', title: 'Unit Conversions' },
    { slug: 'expressions', title: 'Expressions' }
    // ... add the rest of the topics with their corresponding slugs here
];

document.addEventListener("DOMContentLoaded", function () {

    document.body.addEventListener('click', handleSelection);
    document.body.addEventListener('focusin', handleSelection, true); // Using focusin for event delegation on dynamic content

function handleSelection(e) {
    var optionContainer = e.target.closest('.option-1-container, .option-2-container, .option-3-container, .option-4-container, .option-5-container');
    var inputAnswer = e.target.closest('.input-answer'); // Check if an input-answer is focused or clicked
    if (isAnswerChecked) return;

    if (optionContainer || inputAnswer) {
        var selectedOption = optionContainer ? optionContainer.querySelector('button') : null;
        var isSelectedOptionNotAlreadySelected = selectedOption && !selectedOption.classList.contains('selected');

        if (selectedOption && isSelectedOptionNotAlreadySelected) {
            // Deselect other options if a new option is selected
            var allOptions = document.querySelectorAll('.option-1, .option-2, .option-3, .option-4, .option-5');
            allOptions.forEach(function(opt) {
                opt.classList.remove('selected');
                opt.style.backgroundColor = 'transparent';
                opt.style.color = '#011f4b';
            });
            selectedOption.classList.add('selected');
            selectedOption.style.backgroundColor = '#011f4b';
            selectedOption.style.color = 'white';
        }

        var lastPartButton = document.querySelector('.last-part-button');
        Array.from(lastPartButton.children).forEach(child => {
            child.style.display = 'none'; // Hide all children
        });

        // Show the "Check" button and position it at the end of the div
        var checkButton = document.querySelector('.question-check');
        if (checkButton) {
            checkButton.style.display = 'block';
            checkButton.style.marginRight = '15px';
            checkButton.style.order = 1; // Use the 'order' property to position it at the end
        }

        // Ensure the '.last-part-button' div itself is still visible
        lastPartButton.style.display = 'flex'; // Flex display to align children inline
        lastPartButton.style.justifyContent = 'flex-end'; // Align children to the end
    }
}

        const searchInput = document.querySelector(".question-search-bar");
        searchInput.addEventListener("input", function () {
            const questionNumber = parseInt(searchInput.value, 10); // Convert input to a number

            // Check if the input is a valid question number
            if (!isNaN(questionNumber) && questionNumber >= 1 && questionNumber <= numberOfQuestions) {
                currentQuestionIndex = questionNumber; // Update the current question index
                showQuestion('specific'); // Show the specific question
            }
        });

    
    const searchInputTop = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");

    searchInputTop.addEventListener("focus", function () {
        searchButton.style.display = "none"; // Hide the search bar icon icon
    });

    searchInputTop.addEventListener("blur", function () {
        if (searchInputTop.value.length === 0) {
            searchButton.style.display = "block"; // Show the icon if the input is empty
        }
    });
    const startPracticingButton = document.getElementById("startPracticingButton");
    if (startPracticingButton) {
        startPracticingButton.addEventListener('click', function() {
            loadContent();
        });
    }

    const topicListItems = document.querySelectorAll('.topic-list-content li');
    topicListItems.forEach(function(item, index) {
    item.addEventListener('click', function() {
        var loadingScreen = document.getElementById('loading');
        loadingScreen.style.display = 'flex';
        setTimeout(function() {
            loadingScreen.style.opacity = '1';
        }, 10);
        currentTopicIndex = index; 
        setTimeout(function() {
            loadContent(); 
            setTimeout(function() {
                loadingScreen.style.opacity = '0';
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                    updateSelectedTopic(currentTopicIndex);
                }, 300);
            }, 500); 
        }, 5000); 
    });
});
});

function clearSelectionsForCurrentQuestion() {
    var selectedButtons = document.querySelectorAll('#questionContent' + currentQuestionIndex + ' .selected');
    selectedButtons.forEach(function(button) {
      button.classList.remove('selected');
      button.style.backgroundColor = 'transparent';
      button.style.color = '#011f4b';
      button.style.borderColor = '#011f4b';
    });
  }

function showQuestion(direction) {
    // Check if the special button is clicked
    const specialButtonClicked = direction === 'special';

    if (!specialButtonClicked) {
        const currentExplanation = document.getElementById('explanation' + currentQuestionIndex);
        const currentButton = document.getElementById('button-show-explanation' + currentQuestionIndex);
        if (currentExplanation.style.maxHeight) {
            toggleExplanation(currentQuestionIndex);
        }
    }

    // If the special button is clicked, only show the first question and hide the "Previous" button
    if (specialButtonClicked) {
        document.getElementById('questionContent1').style.display = 'block';
        document.getElementById('questionContent2').style.display = 'none';
        document.getElementById('questionContent3').style.display = 'none';
        document.getElementById('questionContent4').style.display = 'none';
        document.getElementById('questionContent5').style.display = 'none';
        document.getElementById('questionContent6').style.display = 'none';
        document.getElementById('questionContent7').style.display = 'none';
        document.getElementById('questionContent8').style.display = 'none';
        document.getElementById('questionContent9').style.display = 'none';
        document.getElementById('questionContent10').style.display = 'none';
        document.getElementById('questionContent11').style.display = 'none';
        document.getElementById('questionContent12').style.display = 'none';
        document.getElementById('questionContent13').style.display = 'none';
        document.getElementById('questionContent14').style.display = 'none';
        document.getElementById('questionContent15').style.display = 'none';
        document.getElementById('questionContent16').style.display = 'none';
        document.getElementById('questionContent17').style.display = 'none';
        document.getElementById('questionContent18').style.display = 'none';
        document.getElementById('questionContent19').style.display = 'none';
        document.getElementById('questionContent20').style.display = 'none';
        document.getElementById('questionContent21').style.display = 'none';
        document.getElementById('questionContent22').style.display = 'none';
        document.getElementById('questionContent23').style.display = 'none';
        document.getElementById('questionContent24').style.display = 'none';
        document.getElementById('questionContent25').style.display = 'none';
        document.getElementById('questionContent26').style.display = 'none';
        document.getElementById('questionContent27').style.display = 'none';
        document.getElementById('questionContent28').style.display = 'none';
        document.getElementById('questionContent29').style.display = 'none';
        document.getElementById('questionContent30').style.display = 'none';
        document.getElementById('questionContent31').style.display = 'none';
        document.getElementById('questionContent32').style.display = 'none';
        document.getElementById('questionContent33').style.display = 'none';
        document.getElementById('questionContent34').style.display = 'none';
        document.getElementById('questionContent35').style.display = 'none';
        document.getElementById('questionContent36').style.display = 'none';
        document.getElementById('questionContent37').style.display = 'none';
        document.getElementById('questionContent38').style.display = 'none';
        document.getElementById('questionContent39').style.display = 'none';
        document.getElementById('questionContent40').style.display = 'none';
        document.getElementById('questionContent41').style.display = 'none';
        document.getElementById('questionContent42').style.display = 'none';
        document.getElementById('questionContent43').style.display = 'none';
        document.getElementById('questionContent44').style.display = 'none';
        document.getElementById('questionContent45').style.display = 'none';
        document.getElementById('questionContent46').style.display = 'none';
        document.getElementById('questionContent47').style.display = 'none';
        document.getElementById('questionContent48').style.display = 'none';
        document.getElementById('questionContent49').style.display = 'none';
        document.getElementById('questionContent50').style.display = 'none';
        document.querySelector('.question-previous').style.display = 'none';
    } else {
        // If it's a regular navigation, update the current question index based on the direction
        if (direction === 'next') {
            currentQuestionIndex++;
            const searchInput = document.querySelector(".question-search-bar");
            if(searchInput){
                searchInput.value = '';
                isAnswerChecked = false;
            }
        } else if (direction === 'previous') {
            currentQuestionIndex--;
            const searchInput = document.querySelector(".question-search-bar");
            if(searchInput){
                searchInput.value = '';
                isAnswerChecked = false;
            }
        }

        // Make sure the index stays within bounds
        currentQuestionIndex = Math.min(Math.max(currentQuestionIndex, 1), numberOfQuestions);

        document.getElementById('questionContent').style.transition = 'opacity 0.5s ease-in-out';
        document.getElementById('questionContent').style.opacity = 0;
        // Show the new current question

        setTimeout(() => {
        document.getElementById('questionContent1').style.display = currentQuestionIndex === 1 ? 'block' : 'none';
        document.getElementById('questionContent2').style.display = currentQuestionIndex === 2 ? 'block' : 'none';
        document.getElementById('questionContent3').style.display = currentQuestionIndex === 3 ? 'block' : 'none';
        document.getElementById('questionContent4').style.display = currentQuestionIndex === 4 ? 'block' : 'none';
        document.getElementById('questionContent5').style.display = currentQuestionIndex === 5 ? 'block' : 'none';
        document.getElementById('questionContent6').style.display = currentQuestionIndex === 6 ? 'block' : 'none';
        document.getElementById('questionContent7').style.display = currentQuestionIndex === 7 ? 'block' : 'none';
        document.getElementById('questionContent8').style.display = currentQuestionIndex === 8 ? 'block' : 'none';
        document.getElementById('questionContent9').style.display = currentQuestionIndex === 9 ? 'block' : 'none';
        document.getElementById('questionContent10').style.display = currentQuestionIndex === 10 ? 'block' : 'none';
        document.getElementById('questionContent11').style.display = currentQuestionIndex === 11 ? 'block' : 'none';
        document.getElementById('questionContent12').style.display = currentQuestionIndex === 12 ? 'block' : 'none';
        document.getElementById('questionContent13').style.display = currentQuestionIndex === 13 ? 'block' : 'none';
        document.getElementById('questionContent14').style.display = currentQuestionIndex === 14 ? 'block' : 'none';
        document.getElementById('questionContent15').style.display = currentQuestionIndex === 15 ? 'block' : 'none';
        document.getElementById('questionContent16').style.display = currentQuestionIndex === 16 ? 'block' : 'none';
        document.getElementById('questionContent17').style.display = currentQuestionIndex === 17 ? 'block' : 'none';
        document.getElementById('questionContent18').style.display = currentQuestionIndex === 18 ? 'block' : 'none';
        document.getElementById('questionContent19').style.display = currentQuestionIndex === 19 ? 'block' : 'none';
        document.getElementById('questionContent20').style.display = currentQuestionIndex === 20 ? 'block' : 'none';
        document.getElementById('questionContent21').style.display = currentQuestionIndex === 21 ? 'block' : 'none';
        document.getElementById('questionContent22').style.display = currentQuestionIndex === 22 ? 'block' : 'none';
        document.getElementById('questionContent23').style.display = currentQuestionIndex === 23 ? 'block' : 'none';
        document.getElementById('questionContent24').style.display = currentQuestionIndex === 24 ? 'block' : 'none';
        document.getElementById('questionContent25').style.display = currentQuestionIndex === 25 ? 'block' : 'none';
        document.getElementById('questionContent26').style.display = currentQuestionIndex === 26 ? 'block' : 'none';
        document.getElementById('questionContent27').style.display = currentQuestionIndex === 27 ? 'block' : 'none';
        document.getElementById('questionContent28').style.display = currentQuestionIndex === 28 ? 'block' : 'none';
        document.getElementById('questionContent29').style.display = currentQuestionIndex === 29 ? 'block' : 'none';
        document.getElementById('questionContent30').style.display = currentQuestionIndex === 30 ? 'block' : 'none';
        document.getElementById('questionContent31').style.display = currentQuestionIndex === 31 ? 'block' : 'none';
        document.getElementById('questionContent32').style.display = currentQuestionIndex === 32 ? 'block' : 'none';
        document.getElementById('questionContent33').style.display = currentQuestionIndex === 33 ? 'block' : 'none';
        document.getElementById('questionContent34').style.display = currentQuestionIndex === 34 ? 'block' : 'none';
        document.getElementById('questionContent35').style.display = currentQuestionIndex === 35 ? 'block' : 'none';
        document.getElementById('questionContent36').style.display = currentQuestionIndex === 36 ? 'block' : 'none';
        document.getElementById('questionContent37').style.display = currentQuestionIndex === 37 ? 'block' : 'none';
        document.getElementById('questionContent38').style.display = currentQuestionIndex === 38 ? 'block' : 'none';
        document.getElementById('questionContent39').style.display = currentQuestionIndex === 39 ? 'block' : 'none';
        document.getElementById('questionContent40').style.display = currentQuestionIndex === 40 ? 'block' : 'none';
        document.getElementById('questionContent41').style.display = currentQuestionIndex === 41 ? 'block' : 'none';
        document.getElementById('questionContent42').style.display = currentQuestionIndex === 42 ? 'block' : 'none';
        document.getElementById('questionContent43').style.display = currentQuestionIndex === 43 ? 'block' : 'none';
        document.getElementById('questionContent44').style.display = currentQuestionIndex === 44 ? 'block' : 'none';
        document.getElementById('questionContent45').style.display = currentQuestionIndex === 45 ? 'block' : 'none';
        document.getElementById('questionContent46').style.display = currentQuestionIndex === 46 ? 'block' : 'none';
        document.getElementById('questionContent47').style.display = currentQuestionIndex === 47 ? 'block' : 'none';
        document.getElementById('questionContent48').style.display = currentQuestionIndex === 48 ? 'block' : 'none';
        document.getElementById('questionContent49').style.display = currentQuestionIndex === 49 ? 'block' : 'none';
        document.getElementById('questionContent50').style.display = currentQuestionIndex === 50 ? 'block' : 'none';

        document.getElementById('questionContent').style.opacity = 1;

        if (direction === 'specific') {
            for (let i = 1; i <= numberOfQuestions; i++) {
                document.getElementById('questionContent' + i).style.display = 'none';
            }
            document.getElementById('questionContent' + currentQuestionIndex).style.display = 'block';
        }
        
        const searchInput = document.querySelector(".question-search-bar");
        if (searchInput) {
            setTimeout(() => {
                searchInput.value = ''; // Clear the input field after 5 seconds
            }, 2000); // Delay in milliseconds (5000ms = 5s)
        }
        
    }, 500);
        // Show or hide the "Previous" button based on the current question index
        const previousButton = document.querySelector('.question-previous');
        const nextButton = document.querySelector('.question-next');
        const finishButton = document.querySelector('.question-finish');
        const placeholder = document.querySelector('.placeholder-previous');

        // If we're at the first question, hide the previous button and show the placeholder
        if (currentQuestionIndex === 1) {
            if (previousButton) previousButton.style.display = 'none';
            if (placeholder) placeholder.style.display = 'block';
        } else {
            if (previousButton) previousButton.style.display = 'block';
            if (placeholder) placeholder.style.display = 'none';
        }

        // If we're at the last question, hide the next button and show the finish button
        if (currentQuestionIndex === numberOfQuestions) {
            if (nextButton) nextButton.style.display = 'none';
            if (finishButton) finishButton.style.display = 'block';
        } else {
            if (nextButton) nextButton.style.display = 'block';
            if (finishButton) finishButton.style.display = 'none';
        }
        document.querySelector('.question-next').style.display = currentQuestionIndex === numberOfQuestions? 'none' : 'block';
    }
    clearSelectionsForCurrentQuestion();
    updateNavigationButtons();
}
document.getElementById('questionContent').style.transition = 'opacity 0.5s ease-in-out';

function updateNavigationButtons() {
    const previousButton = document.querySelector('.question-previous');
    const nextButton = document.querySelector('.question-next');
    const finishButton = document.querySelector('.question-finish');
    const placeholder = document.querySelector('.placeholder-previous');

    previousButton.style.display = currentQuestionIndex === 1 ? 'none' : 'block';
    placeholder.style.display = currentQuestionIndex === 1 ? 'block' : 'none';
    nextButton.style.display = currentQuestionIndex === numberOfQuestions ? 'none' : 'block';
    finishButton.style.display = currentQuestionIndex === numberOfQuestions ? 'block' : 'none';
}

function updateSelectedTopic(index) {
    // Remove the 'selected' class from all topics
    const allTopics = document.querySelectorAll('.topic-list-content li');
    allTopics.forEach(function(topic) {
        topic.classList.remove('selected');
        topic.style.borderLeft = 'none'; // Remove any left border styling
    });

    // Add the 'selected' class to the current topic
    const selectedTopic = document.querySelector('.topic-list-content li:nth-child(' + (index + 1) + ')');
    if (selectedTopic) {
        selectedTopic.classList.add('selected');
        selectedTopic.style.borderLeft = '4px solid #011f4b'; // Set the left border styling
        isAnswerChecked = false;
    }
}

function loadContent() {
    if (currentTopicIndex >= topics.length) {
        console.error('Error: No more topics to load.');
        return; // Exit the function if there are no more topics.
    }

    let topic = topics[currentTopicIndex];
    let htmlURL = 'dsat-math-question/' + topic.slug + '/' + topic.slug + '.html';
    let cssURL = 'dsat-math-question/' + topic.slug + '/' + topic.slug + '.css';
    let jsURL = 'function.js'; // Assuming the JS file is common and located in the root folder.

    // Fetch HTML content
    fetch(htmlURL)
        .then(response => response.text())
        .then(html => {
            // Fetch CSS content
            return fetch(cssURL)
                .then(response => response.text())
                .then(css => {
                    // Create a style element and append the CSS content
                    const styleElement = document.createElement('style');
                    styleElement.innerHTML = css;
                    document.head.appendChild(styleElement);

                    // Fetch JavaScript content
                    return fetch(jsURL)
                        .then(response => response.text())
                        .then(js => {
                            // Create a script element and append the JavaScript content
                            const scriptElement = document.createElement('script');
                            scriptElement.innerHTML = js;
                            document.body.appendChild(scriptElement);

                            // Insert the loaded HTML into the questionContent div
                            document.getElementById('questionContent').innerHTML = html;
                            document.getElementById('questionContent').style.padding = 0;
                            document.getElementById('questionContent').style.margin = 0;
                            document.getElementById('questionContent').style.opacity = 0;
                            setTimeout(() => {
                                // Fade in the question content
                                document.getElementById('questionContent').style.transition = 'opacity 0.5s ease-in-out';
                                document.getElementById('questionContent').style.opacity = 1;

                                // Now that content is loaded, ensure the last-part-button is visible
                                const lastPartButton = document.querySelector('.last-part-button');
                                lastPartButton.style.display = 'flex'; // Change from 'none' to 'flex'
                            }, 500);

                            updateSelectedTopic(currentTopicIndex);

                            // Finally, typeset MathJax
                            MathJax.typesetPromise().then(() => {
                                // Call the showQuestion function to display the first question
                                currentQuestionIndex = 1;
                                showQuestion('special');
                            });
                        });
                });
        })
        .catch(error => console.error('Error loading topic:', error));
}

function loadNextTopic() {
    var loadingScreen = document.getElementById('loading');
    loadingScreen.style.display = 'flex';
    setTimeout(function() {
        loadingScreen.style.opacity = '1';
    }, 10); 

    updateSelectedTopic(currentTopicIndex);
    currentTopicIndex++;

    if (currentTopicIndex < topics.length) {
        setTimeout(function() {
            loadContent(); 
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 300); 
        }, 5000); 
    } else {
        console.error('Error: You have reached the end of the topics.');
    }
}

document.querySelector('.question-finish').addEventListener('click', loadNextTopic);

function toggleExplanation(questionIndex) {
    var explanation = document.getElementById('explanation' + questionIndex);
    var button = document.getElementById('button-show-explanation' + questionIndex);

    if (explanation.style.maxHeight) {
        explanation.style.maxHeight = null;
        button.textContent = 'Show Explanation';
    } else {
        // Close the explanation for all other questions
        for (let i = 1; i <= numberOfQuestions; i++) {
            if (i !== questionIndex) {
                var otherExplanation = document.getElementById('explanation' + i);
                var otherButton = document.getElementById('button-show-explanation' + i);
                if (otherExplanation.style.maxHeight) {
                    otherExplanation.style.maxHeight = null;
                    otherButton.textContent = 'Show Explanation';
                }
            }
        }
        explanation.style.maxHeight = explanation.scrollHeight + "px";
        button.textContent = 'Hide Explanation';
    }
}

function checkAnswer() {
    let questionId = 'questionContent' + currentQuestionIndex;
    let dataQuestionId = document.getElementById(questionId).getAttribute('data-question-id');
    let correctAnswer = correctAnswers[dataQuestionId].split(',').map(ans => ans.trim());

    let userAnswer = '';
    let isCorrect = false;
    let feedbackSound = new Audio();  


    let inputField = document.querySelector(`#${questionId} .input-answer`);
    let selectedOption = document.querySelector(`#${questionId} .selected`);

    if (inputField && inputField.value.trim() === '') {
        alert('Please enter an answer before checking.');
        return;  
    }

    if (inputField) {
        userAnswer = inputField.value.trim();
        isCorrect = correctAnswer.some(ans => userAnswer.toLowerCase() === ans.toLowerCase());
        inputField.readOnly = true;
        isAnswerChecked = true;

        if (isCorrect) {
            inputField.style.borderColor = 'rgb(0, 163, 0)'; 
            feedbackSound.src = 'picture/interface-124464.mp3'; 
            feedbackSound.play();  
            toggleExplanation(currentQuestionIndex); 

            var end = Date.now() + (1 * 1000);
        var colors = ['#011f4b', '#6497b16b', '#011f4ba9', '#6f8aa2', '#dfeaf0', '#dbdbdb', '#e9eaea', '#03396c12', '#6497b1', '#03396c', '#b3cde0', '#011F4B', '#cfd9de', '#aec2cc'];
        (function frame() {
            var rect = inputField.getBoundingClientRect();
            var fieldMiddleX = (rect.left + rect.right) / 2;
            var fieldMiddleY = (rect.top + rect.bottom) / 2;
            var originX = fieldMiddleX / window.innerWidth;
            var originY = fieldMiddleY / window.innerHeight;
            confetti({
                particleCount: 2,
                spread: 360,
                origin: {
                    x: originX, 
                    y: originY  
                },
                colors: colors
            });
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
            
        } else {
        inputField.style.color = '#db1c1c';
        inputField.style.borderColor = '#db1c1c'; 
        }
    } else if (selectedOption) {
        userAnswer = selectedOption.innerText.trim();
        isCorrect = correctAnswer.some(ans => userAnswer.toLowerCase() === ans.toLowerCase());
         isAnswerChecked = true; 
    if (isCorrect) {
        if (selectedOption) {
            selectedOption.style.color = 'rgb(0, 163, 0)';
            selectedOption.style.borderColor = 'rgb(0, 163, 0)';
            selectedOption.style.backgroundColor = 'transparent';
        }
        feedbackSound.src = 'picture/interface-124464.mp3'; 
        feedbackSound.play();  
        toggleExplanation(currentQuestionIndex); 

        var end = Date.now() + (1 * 1000);
        var colors = ['#011f4b', '#6497b16b', '#011f4ba9', '#6f8aa2', '#dfeaf0', '#dbdbdb', '#e9eaea', '#03396c12', '#6497b1', '#03396c', '#b3cde0', '#011F4B', '#cfd9de', '#aec2cc'];
        (function frame() {
            var rect = selectedOption.getBoundingClientRect();
            var buttonMiddleX = (rect.left + rect.right) / 2;
            var buttonMiddleY = (rect.top + rect.bottom) / 2;
            var originX = buttonMiddleX / window.innerWidth;
            var originY = buttonMiddleY / window.innerHeight;
            confetti({
                particleCount: 2,
                spread: 360,
                origin: {
                    x: originX, 
                    y: originY  
                },
                colors: colors
            });
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

    } else {
        selectedOption.style.color = '#db1c1c';
        selectedOption.style.borderColor = '#db1c1c';
        selectedOption.style.backgroundColor = 'transparent';
    }
}
resetUI().style.transition = 'opacity 0.5s ease-in-out';
}

function resetUI() {
    var checkButton = document.querySelector('.question-check');
    var navButtons = document.querySelectorAll('.question-previous, .question-next');
    var searchInput = document.querySelector(".question-search-bar");
    if (checkButton) {
        checkButton.style.display = 'none';
    }
    navButtons.forEach(function(button) {
        button.style.display = 'block';
    });
    if (searchInput) {
        searchInput.style.display = 'block';
    }

    var lastPartButton = document.querySelector('.last-part-button');
    if (lastPartButton) {
        lastPartButton.style.display = 'flex';
        lastPartButton.style.justifyContent = ''; 
        Array.from(lastPartButton.children).forEach(child => {
            child.style.order = ''; 
        });
    }
    updateNavigationButtons();
}