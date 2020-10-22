const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Subject',
  text: 'text',
  html: 'text',
};
sgMail.send(msg).then();
