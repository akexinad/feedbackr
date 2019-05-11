function localtunnel {
  lt -s bdefhsakxdciqpow --port 3001
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done