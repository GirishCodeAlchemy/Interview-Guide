package main

import (
	"fmt"
	"io"
	"os"
)

const filename = "output"

// Function to read parts of the file with minimal memory allocations.
func readFile(m, n int, bytesChannel chan []byte, errChannel chan error) {
	// Open the file.
	file, err := os.Open(filename)
	if err != nil {
		errChannel <- err
		close(bytesChannel)
		close(errChannel)
		return
	}
	defer file.Close()

	// Initialize variables.
	buffer := make([]byte, n)
	offset := 0

	// Loop to read parts of the file.
	for {
		// Seek to the current offset.
		_, seekErr := file.Seek(int64(offset), io.SeekStart)
		if seekErr != nil {
			errChannel <- seekErr
			break
		}

		// Read a chunk of data.
		readSize, readErr := file.Read(buffer)
		if readErr != nil {
			if readErr != io.EOF {
				errChannel <- readErr
			}
			break
		}

		// Send a copy of the bytes to the channel.
		bytesToSend := make([]byte, readSize)
		copy(bytesToSend, buffer[:readSize])
		bytesChannel <- bytesToSend

		// Update the offset for the next iteration.
		offset += m

		// Break if end of file is reached.
		if readSize < n {
			break
		}
	}

	// Close channels at the end.
	close(bytesChannel)
	close(errChannel)
}

func main() {
	// Example values for m and n.
	m := 4
	n := 3

	// Create channels for bytes and errors.
	bytesChannel := make(chan []byte)
	errChannel := make(chan error)

	// Start reading the file.
	go readFile(m, n, bytesChannel, errChannel)

	// Process the bytes from the channel.
	for byteChunk := range bytesChannel {
		// Convert and print the byte chunk as a string.
		fmt.Println(string(byteChunk))
	}

	// Check for errors from the error channel.
	err, hasError := <-errChannel
	if hasError {
		fmt.Println("Error:", err)
	}
}

// package main

// import (
// 	"bufio"
// 	"fmt"
// 	"io"
// 	"os"
// 	"runtime"
// 	"strconv"
// 	"strings"
// )

// /*
//  * Complete the 'readFile' function below.
//  *
//  * The function accepts following parameters:
//  *  1. int m
//  *  2. int n
//  *  3. chan []byte bytesChannel
//  *  4. chan error errChannel
//  */

// func readFile(m, n int, bytesChannel chan []byte, errChannel chan error) {
// 	// Open the file.
// 	fileData, err := os.Open(filename)
// 	if err != nil {
// 		errChannel <- err
// 		close(bytesChannel)
// 		close(errChannel)
// 		return
// 	}
// 	defer fileData.Close()

// 	// Initialize variables.
// 	content := make([]byte, n)
// 	offset := 0

// 	// Loop to read parts of the file.
// 	for {
// 		// Seek to the current offset.
// 		_, seekErr := fileData.Seek(int64(offset), io.SeekStart)
// 		if seekErr != nil {
// 			errChannel <- seekErr
// 			break
// 		}

// 		// Read a chunk of data.
// 		readSize, readErr := fileData.Read(content)
// 		if readErr != nil {
// 			if readErr != io.EOF {
// 				errChannel <- readErr
// 			}
// 			break
// 		}

// 		// Send a copy of the bytes to the channel.
// 		bytesToSend := make([]byte, readSize)
// 		copy(bytesToSend, content[:readSize])
// 		bytesChannel <- bytesToSend

// 		// Update the offset for the next iteration.
// 		offset += m

// 		// Break if end of file is reached.
// 		if readSize < n {
// 			break
// 		}
// 	}

// 	// Close channels at the end.
// 	close(bytesChannel)
// 	close(errChannel)

// }

// func main() {
// 	reader := bufio.NewReaderSize(os.Stdin, 16*1024*1024)

// 	mTemp, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 64)
// 	checkError(err)
// 	m := int(mTemp)

// 	nTemp, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 64)
// 	checkError(err)
// 	n := int(nTemp)

// 	inputString := readLine(reader)

// 	file, err := os.Create(filename)
// 	checkError(err)
// 	defer file.Close()
// 	_, err = file.WriteString(inputString)
// 	checkError(err)
// 	bytesChannel, errChannel := make(chan []byte), make(chan error)
// 	var ms runtime.MemStats
// 	runtime.ReadMemStats(&ms)
// 	allocBefore := ms.Alloc
// 	go readFile(m, n, bytesChannel, errChannel)
// 	go func() {
// 		for {
// 			select {
// 			case next := <-bytesChannel:
// 				fmt.Println(string(next))
// 			default:
// 			}
// 		}
// 	}()
// 	err = <-errChannel
// 	if err == io.EOF {
// 		runtime.ReadMemStats(&ms)
// 		allocAfter := ms.Alloc
// 		if allocAfter-allocBefore > 10000 {
// 			fmt.Println("Memory usage limit exceeded")
// 		}
// 	} else {
// 		checkError(err)
// 	}
// }

// const filename = "output"

// func readLine(reader *bufio.Reader) string {
// 	str, _, err := reader.ReadLine()
// 	if err == io.EOF {
// 		return ""
// 	}

// 	return strings.TrimRight(string(str), "\r\n")
// }

// func checkError(err error) {
// 	if err != nil {
// 		panic(err)
// 	}
// }
