---
title: Zrzucanie kart gry
---

Ta sekcja służy do zrzucania kart z grami przy użyciu GodMode9i, aby można je było odtwarzać na emulatorach, flashcardach lub na karcie SD poprzez nds-bootstrap.

## Wymagania
- Tytuł, który chcesz zrzucić
- Nintendo DSi z zainstalowanym[Unlaunch](installing-unlaunch)

## Instrukcje
### Sekcja I - Konfiguracja karty SD

::: tip

Korzystasz z Windows, Linux czy macOS? Użyj [Lazy DSi Downloader](lazy-dsi-downloader), aby automatycznie skonfigurować kartę SD.

:::

1. Pobierz najnowszą wersję [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
1. Wyodrębnij `GodMode9i.nds` z archiwum GodMode9i i umieść go gdziekolwiek na karcie SD

### Sekcja II – Instrukcje Nintendo DSi
1. Włącz konsolę trzymając <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
   - To powinno uruchomić Unlaunch Filemenu
1. Uruchom GodMode9i z Unlaunch Filemenu
1. Upewnij się, że gra jest włożona do konsoli
1. Wybierz opcję "NDS GAMECARD" w GodMode9i
1. Wybierz, czy chcesz wypełnienie czy nie:
   - Pełne: Padding przyłączony
   - Przycięty: Paddowanie usunięty
1. Powtórz kroki 3-5 dla wszystkich tytułów, które chcesz zrzucić

::: tip

Zrzucone tytuły zostaną zamieszczone w `sd:/gm9i/out`.

:::