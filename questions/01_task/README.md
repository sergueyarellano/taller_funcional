# Task 01 filter y map

## Premisas

Prohibido usar  `for`, `while` y sucedaneos

## Problema

De los datos contenidos `product-customer-limits.json`, necesitamos extraer de la parte de `informationPeriodAmount` todos los elementos del array que cumplan con:

```
[
  {
    // ...
    "riskType" : {
       "id":"C"
    },
    // ...
  }
]
```

Después con esos datos tenemos que generar un nuevo array de objetos, cada uno de sus objetos deben cumplir con la siguiente estructura:

```
[
  {
    maxAmount : elem.amountMaximun.amount,
    minAmount : elem.amountMinimun.amount,
    minTerm :  elem.periodMinimun.amount,
    maxTerm : elem.periodMaximun.amount
  }
]
```
