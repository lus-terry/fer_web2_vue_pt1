# todo-app

Osim u popisu koji slijedi, primjeri su označeni i pomoću komentara te ih je lako pronaći pomoću search opcije.
![image](https://github.com/user-attachments/assets/9740e03f-a987-43af-99b6-8619a4914cf2)


## PREGLED IMPLEMENTACIJA:


## Interpolation/One-way Binding
IMPLEMENTIRANO - koristi se u većini komponenata
### Primjeri:
src/components/List.vue, 
linije: 5 ({{ currentMonth }}, 
        10 {{ greetingMessage }}).

## Two-way Binding
IMPLEMENTIRANO - u komponenti AddTaskForm.vue povezuje se varijabla newTask s unosnim poljem pomoću v-model
### Primjer:
src\components\AddTaskForm.vue 
linija: 5 (two-way binding za newTask)


## Methods
IMPLEMENTIRANO - koristi se u gotovo svim komponentama
### Primjer:
src/components/AddTaskForm.vue, 
metoda addNewTask, 
linije: 27-32

## Computed Properties
IMPLEMENTIRANO 
### Primjer:
src/components/List.vue,  greetingMessage, linije: 39-47

## Barem jedan Scoped Style
IMPLEMENTIRANO - scoped stilovi prisutni u svim komponentama
### Primjer:
src/components/AddTaskForm.vue, stil 
linije: 40-64

## Koristiti barem jedan Lifecycle Hook
IMPLEMENTIRANO - onMounted korišten u više komponenti
### Primjer:
src/components/List.vue, 
linija: 31

## Routing (više stranica)
IMPLEMENTIRANO - definirano u src/router/index.js, 
### Primjer:
rute:  /life, /:listName

## Aplikacija mora biti bookmarkable
IMPLEMENTIRANO - Routing omogućuje pristup putem URL-ova, npr. /life, /work, /school

## Dinamičko usmjeravanje s 404 stranicom ("catch all")
IMPLEMENTIRANO 
src/router/index.js, linija: 13

## Barem dvije komponente
IMPLEMENTIRANO - implementirane su iše od dvije komponente
### Primjer: List.vue, Sidebar.vue, AddTaskForm.vue

## Komponenta bez stanja, koristiti properties
IMPLEMENTIRANO 
### Primjer:
TaskItem.vue, koristi property task, linija: 8.
src/components/Sidebar.vue, 
linija: 15

## Komponenta sa stanjem
IMPLEMENTIRANO 
### Primjer:
Sidebar.vue, koristi Pinia store za praćenje lists.
src\components\Sidebar.vue
linija: 38


## Barem jedna komponenta mora emitirati barem jedan event
IMPLEMENTIRANO - 
### Primjer:
TaskItem.vue, emitira toggle-completion i delete-task eventove, 
src\components\TaskItem.vue,
linije: 6,9

## Store (Pinia)
IMPLEMENTIRANO - Implementiran u src/stores/lists.js i src/stores/tasks.js.

## Asinkroni dohvat podataka s backenda
IMPLEMENTIRANO - Dohvat i spremanje u localStorage kroz asinkrone pozive
### Primjeri:
src/stores/lists.js, fetchLists(), linije: 8-26.
src/stores/tasks.js, fetchTasks(), linije: 8-22

## Ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije
IMPLEMENTIRANO - Lazy loading komponenata kroz vue-router
### Primjer:
src/router/index.js, dinamički import za List.vue i NotFoundView.vue, l
Linije:2,3
