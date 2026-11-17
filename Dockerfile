FROM node
CMD [ "node", "/root/index.js" ]

COPY ./* /root/
RUN cd /root/ && npm install