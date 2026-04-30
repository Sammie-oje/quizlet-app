export function evaluateSelectedOption(question, selectedId) {
    const answer = question.answer;
    const selectedOption = question.options[selectedId];

    const isOptionCorrect = answer === selectedOption;
    return isOptionCorrect;
}
