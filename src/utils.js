export const getCorrectlyAnsweredList = (
  correctAnswers = [],
  submittedAnswers = []
) => {
  const correctlyAnsweredList = correctAnswers?.filter((correctAnswer) => {
    const submittedAnswer = submittedAnswers?.find(
      (submittedAnswer) =>
        submittedAnswer?.question_id == correctAnswer?.question_id
    );

    return correctAnswer?.answer === submittedAnswer?.answer;
  });
  return correctlyAnsweredList;
};

export const getTotalMarks = (correctlyAnsweredList = []) => {
  const totalMarks = correctlyAnsweredList?.reduce(
    (total, current) => total + current?.marks,
    0
  );

  return totalMarks;
};

export const getRankingsList = (attempts = []) => {
  const rankingArray = attempts?.map((attempt) => {
    const { correct_answers, submitted_answers, user, id } = attempt || {};

    const totalMarks = getTotalMarks(
      getCorrectlyAnsweredList(correct_answers, submitted_answers)
    );
    return {
      user,
      id,
      marks: totalMarks,
    };
  });

  return rankingArray?.sort((a, b) => b?.marks - a?.marks);
};

export function formatOrdinal(number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${number}th`;
  }

  return `${number}${suffixes[lastDigit] || "th"}`;
}

export const shuffleList = (list = []) => {
  const copiedList = [...list];
  for (let i = copiedList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copiedList[i], copiedList[j]] = [copiedList[j], copiedList[i]];
  }
  return copiedList;
};
