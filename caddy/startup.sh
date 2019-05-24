#!/bin/bash

# Any errors encountered will kill this script instead of being ignored.
set -e

echo 'Caddy service starting up.'

echo ''

envsubst '\$URL \$TLS_OPTIONS \$API_HOST \$API_PORT \$CLIENT_HOST \$CLIENT_PORT \$BASIC_AUTH_OPTIONS' < Caddyfile.template > /etc/Caddyfile

/bin/parent caddy --conf /etc/Caddyfile --log stdout --agree=$ACME_AGREE
