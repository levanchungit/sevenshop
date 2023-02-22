# Setup project

## Run yarn

```cmd
yarn
```

## Run project

```cmd
yarn start
```

## Update branch

```bash
git fetch
```

## Add staging

```bash
git add .
```

## Commit code

```bash
git commit -m "feat: ..."
```

## Git rebase

Pull code 2 nhánh về (master, nhánh con)
Vào nhánh phụ

```bash
git rebase master
```

Xử lý conflict tới khi nào xong rồi

```bash
git push --force-with-lease
```

##Git Stash
Ở nhánh đang có thay đổi code
``bash
git add .
```
``bash
git stash .
```
Lưu lại thay đổi đó
Tạo nhánh mới
```bash
git stash apply
```
Áp dụng thay đổi đó cho nhánh mới
