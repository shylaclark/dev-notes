# Lambda Functions

## Comparison with standard functions

### Standard functions
- Used many times
- Multiple lines of code
- Named only
- None or more inputs
- None or more returns

### Lambda functions
- Inteded for single use
- Defined in a single line
- Named or anonymous
- None or more inputs
- One or more return

## Examples

Standard 
```
def myfunc(x, y, z):
  result = x + y + z
  return result
```

Lambda 
```
lambda x, y, z : x + y + z
```

-------

Standard
```
def second(x):
  return x[1]
  
a = [(1,2),(2,5),(3,1),(4,15)]
a.sort(key=second)
```

Lambda
```
a = [(1,2),(2,5),(3,1),(4,15)]
a.sort(key=lambda x:x[1])
```
