export const validateAnswers = (answers: Record<string, string | string[]>, questionId: string) => {
  const answer = answers[questionId];

  if (Array.isArray(answer)) {
    if (answer.length > 0) {
      return true;
    } else {
      return false;
    }
  } else if (!answer?.trim()) {
    return false;
  } else {
    return true;
  }
};
