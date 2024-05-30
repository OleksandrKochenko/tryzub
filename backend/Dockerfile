ARG GO_VERSION=1.22.3
FROM golang:${GO_VERSION} AS build
WORKDIR /internal

COPY . /internal

RUN go mod tidy
RUN go build -o backend ./main.go

CMD [ "./backend" ]
