export const formatDate = (date: any) => {
  const currentDate: any = new Date();
  const targetDate: any = new Date(date);

  const timeDifference = currentDate - targetDate;

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference > 30) {
    const months = Math.floor(daysDifference / 30);
    targetDate.setMonth(targetDate.getMonth() + months);

    if (months > 12) {
      const years = Math.floor(months / 12);

      return <span>{years} tahun yang lalu</span>;
    }

    return <span>{months} bulan yang lalu</span>;
  }

  return <span>{daysDifference} hari yang lalu</span>;
};
