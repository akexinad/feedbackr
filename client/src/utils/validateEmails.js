const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default (recipientEmails) => {
  const invalidEmails = recipientEmails
    .split(/[ ,]+/)
    .map( email => email.trim() )
    .filter( email => email.length && emailRegex.test(email) === false )

  if (invalidEmails.length) {
    return `These emails are invalid: ${ invalidEmails }`;
  }

  return;
}
