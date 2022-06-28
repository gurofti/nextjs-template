## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```


## Husky (Git komutları işleme alınmadan önce çalıştılacak komutları tetikler. (Patlarsa göndermez :)) ESLint)
yarn add -D husky

npx husky install

npx husky add .husky/pre-commit "yarn lint"

npx husky add .husky/pre-push "yarn build"

## @commitlint (Topluluk tarafından kabul görmüş belirli standartlarda kod yazmayı sağlayan paket.)
Config dosya üzerinden yazım standartları belirlenir. (Kafanıza göre iş yapmayın demektir.)

yarn add -D @commitlint/config-conventional @commitlint/cli

## Storybook Kurulum (Componentler için dökümantasyon oluşturmaya yarar.)
npx sb init --builder webpack5