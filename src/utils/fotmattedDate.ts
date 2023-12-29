export const formattedDate = (dateTimeString: string) => {

  const dateTime = new Date(dateTimeString);


  if (!isNaN(dateTime.getTime())) {

    const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatted = dateTime.toLocaleString('en-US', options);
    return formatted;
  } else {
    return "Invalid date";
  }

}