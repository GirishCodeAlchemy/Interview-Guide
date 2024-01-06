// func SyncHash(steps int, resultChan0 chan Result, resultChan1 chan Result) (map[string]int32, error) {
//     resultMap := make(map[string]int32)
//     done := make(chan struct{}, 2)

//     processResults := func(resultChan chan Result) {
//         for i := 0; i < steps; i++ {
//             select {
//             case result := <-resultChan:
//                 resultMap[result.Hash] += result.Number
//             case <-time.After(maxDelay):
//                 done <- struct{}{} // Timeout occurred
//                 return
//             }
//         }
//         done <- struct{}{}
//     }

//     go processResults(resultChan0)
//     go processResults(resultChan1)

//     // Wait for both goroutines to finish
//     <-done
//     <-done

//     if len(resultMap) == 0 {
//         return nil, timeoutErr
//     }

//     return resultMap, nil
// }

package main

import (
	"fmt"
	"time"
)

type Result struct {
	Hash   string
	Number int32
}

const maxDelay = 100 * time.Millisecond
const timeoutErr = "timeout error"

func SyncHash(steps int, resultChan0 chan Result, resultChan1 chan Result) (map[string]int32, error) {
	resultMap := make(map[string]int32)
	done := make(chan struct{}, 2)

	processResults := func(resultChan chan Result) {
		for i := 0; i < steps; i++ {
			select {
			case result := <-resultChan:
				resultMap[result.Hash] += result.Number
			case <-time.After(maxDelay):
				done <- struct{}{} // Timeout occurred
				return
			}
		}
		done <- struct{}{}
	}

	go processResults(resultChan0)
	go processResults(resultChan1)

	// Wait for both goroutines to finish
	<-done
	<-done

	if len(resultMap) == 0 {
		return nil, fmt.Errorf(timeoutErr)
	}

	return resultMap, nil
}

func main() {
	var n int
	fmt.Scan(&n)

	hashes := make([]string, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&hashes[i])
	}

	var numbers0, numbers1 []int32

	for i := 0; i < n; i++ {
		var num int32
		fmt.Scan(&num)
		numbers0 = append(numbers0, num)
	}

	for i := 0; i < n; i++ {
		var num int32
		fmt.Scan(&num)
		numbers1 = append(numbers1, num)
	}

	resultChan0 := make(chan Result, n)
	resultChan1 := make(chan Result, n)

	go func() {
		for i := 0; i < n; i++ {
			resultChan0 <- Result{Hash: hashes[i], Number: numbers0[i]}
		}
		close(resultChan0)
	}()

	go func() {
		for i := 0; i < n; i++ {
			resultChan1 <- Result{Hash: hashes[i], Number: numbers1[i]}
		}
		close(resultChan1)
	}()

	result, err := SyncHash(n, resultChan0, resultChan1)
	if err != nil {
		fmt.Println(err)
	} else {
		for hash, number := range result {
			fmt.Printf("%s %d\n", hash, number)
		}
	}
}
