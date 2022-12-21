const createDateDiapason = (date) => {
  if (!date) {
    return false;
  }

  const dateString = date.toString();
  const sinceYear = new Date(dateString).getFullYear();
  const currentYear = new Date().getFullYear();

  if (sinceYear === currentYear) {
    return sinceYear;
  }

  return `${sinceYear}—${currentYear}`;
};

export default createDateDiapason;
