# Получал JSON с помощью mockapi.io + Faker.js 

```
https://6490611e1e6aa71680cb24ca.mockapi.io/TS
```




# Инструкции по установке и запуску приложения
## Эти инструкции помогут вам установить и запустить приложение.


### Перед установкой убедитесь, что у вас установлены следующие компоненты:

Node.js (версия 12 или выше)

npm (входит в установку Node.js)

React Native CLI (установите глобально)


# Склонируйте репозиторий с приложением.
```
git clone <URL репозитория>
```

### Перейдите в каталог проекта.

```
cd <каталог проекта>
```

### Установите зависимости.

```
npm install
npm install -g expo-cli
```

# Запуск

### Выполните следующую команду для запуска приложения:

```
npx expo start
```

# Использование

## Приложение представляет собой навигационное приложение с двумя экранами: "Список" и "Карта со всеми доступными ТС".

### Экран "Список"

На этом экране отображается список доступных транспортных средств (ТС). Вы можете фильтровать ТС по категории, выбирая соответствующую категорию вверху экрана. Нажмите кнопку "Применить", чтобы применить фильтр. Вы можете прокручивать список ТС, чтобы просмотреть все доступные записи. Чтобы получить подробную информацию о ТС, нажмите на запись в списке.

### Экран "Карта со всеми доступными ТС"

На этом экране отображается карта с маркерами, обозначающими расположение всех доступных ТС. Вы можете нажать на маркер, чтобы увидеть краткую информацию о ТС. Чтобы получить подробную информацию о ТС, нажмите на информационное окно маркера.

# Зависимости

## Проект использует следующие зависимости:

```
react-native-gesture-handler
@react-navigation/native
@react-navigation/stack
@react-navigation/bottom-tabs
react-native-maps
```

### Вы можете установить их с помощью команды:
```
npm install react-native-gesture-handler @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-maps
```
