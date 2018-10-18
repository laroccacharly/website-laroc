# Introduction 

ProjectName : todolist-go-docker-tdd 

Technologies : Golang, Docker, TDD, HTTP



# Setup 
Only dependency is docker : https://docs.docker.com/install/


## Dockerfile
Generic Dockerfile for a Golang project 
```
# Start from a golang image. Name it "builder"
# "builder" because this image compiles the go application 
FROM golang:1.11 as builder 
# Convention. Go apps are located in the go dir. 
WORKDIR /go/src/todolist 
# Copy the files in the root dir (/go/src/todolist)
COPY  . .
# Install dependencies 
dep ensure 
# Compile the app. 
# Source : 
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o todo list .


# Second part of the Dockerfile 
FROM alpine:latest
RUN apk --no-cache add ca-certificates
EXPOSE 80
COPY --from=builder /go/src/mnist/main .
CMD ["./main"]  
```

# First test 
./run_test
```
docker run go test 
```

## todolist.go 

## todolist_test.go 



# Requirements 
This is what the user wants. 


Supported actions : 
- create. todo => bool
- selectAll. () => []todo
- delete. todo => bool 

todo object : 
```
todo: {
    name: string
}
```

Example of a flow : 

-action : selectAll 
expectation : []

  
CREATE `{todo: {name: hello}}`
CREATE `{todo: {name: hello}}`