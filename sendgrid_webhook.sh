function localtunnel {
  # NOTE: the url in https://app.sendgrid.com/settings/mail_settings will need to be changed when deployed in production:
  lt -s bdefhsakxdciqpow --port 3001
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
