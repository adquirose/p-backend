module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'contacto.lanube360@gmail.com',
        defaultReplyTo: 'contacto.lanube360@gmail.com',
      },
    },
  },
});