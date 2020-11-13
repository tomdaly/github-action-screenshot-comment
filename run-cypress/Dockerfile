FROM debian:9.5-slim
ADD entrypoint.sh /entrypoint.sh
ADD https://dl.yarnpkg.com/debian/pubkey.gpg /tmp
RUN apt-key add /tmp/pubkey.gpg
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install curl openssl yarn
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
