interface Props {
  totalPages: number;
  currentPage: number;
}

export const getPaginationButtons = ({ totalPages, currentPage }: Props) => {
  const paginationButtons: (number | "...")[] = [];

  // less than 8 pages
  if (totalPages < 8) {
    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(i);
    }

    return paginationButtons;
  }

  // first 5 pages
  if (currentPage < 5) {
    for (let i = 1; i < 6; i++) {
      paginationButtons.push(i);
    }

    paginationButtons.push("...");
    paginationButtons.push(totalPages);

    return paginationButtons;
  }

  // last five pages
  if (totalPages - currentPage < 4) {
    paginationButtons.push(1);
    paginationButtons.push("...");

    for (let i = totalPages - 4; i <= totalPages; i++) {
      paginationButtons.push(i);
    }

    return paginationButtons;
  }

  // other pages
  paginationButtons.push(1);
  paginationButtons.push("...");

  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    paginationButtons.push(i);
  }

  paginationButtons.push("...");
  paginationButtons.push(totalPages);

  return paginationButtons;
};