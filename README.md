# release-tag-demo

- v1

```bash
TAG_NAME="main-v$(date +'%Y%m%d.%H%M%S')" # 标签名称格式为'v年月日.时分秒'
```

- v2

```bash

# 当前分支
CURRENT_BRANCH=$(git branch --show-current)
# 当日日期
DATE=$(date +"%Y%m%d")
# 当日已存在的tags数作为版本基础
VERSION_BASE=$(git tag | grep $DATE | wc -l)
# 下一个版本号
VERSION_NEXT=$((VERSION_BASE + 1))
# 完整的tag名称
TAG_NAME="${CURRENT_BRANCH}-${DATE}-v${VERSION_NEXT}"

git tag $TAG_NAME
git push origin $TAG_NAME
```

- v3

```bash
DATE=$(date +"%Y%m%d")
# 获取最新版本号
LATEST_TAG=$(git tag -l "$DATE-v*" | sort -V | tail -n1)
# 如果今天还没有版本，从v1开始
if [ -z "$LATEST_TAG" ]; then
    VERSION=1
else
    # 提取现有的最大版本
    VERSION=${LATEST_TAG#*v}
    # 递增版本号
    ((VERSION++))
fi
# 创建新的标签名
NEW_TAG="$DATE-v$VERSION"
# 创建标签
git tag $NEW_TAG
echo "Created new tag: $NEW_TAG"
```

- v4

```bash
# 当日日期
DATE=$(date +"%Y%m%d")

# 当前分支
CURRENT_BRANCH=$(git branch --show-current)

# 获取最新版本号
LATEST_TAG=$(git tag -l "${CURRENT_BRANCH}-$DATE-v*" | sort -V | tail -n1)
# 如果今天还没有版本，从v1开始
if [ -z "$LATEST_TAG" ]; then
    VERSION=1
else
    # 提取现有的最大版本
    VERSION=${LATEST_TAG#*v}
    # 递增版本号
    ((VERSION++))
fi

# 创建新的标签名
TAG_NAME="${CURRENT_BRANCH}-$DATE-v$VERSION"

git tag $TAG_NAME
echo "Created new tag: $TAG_NAME"
```

- v5

```bash
# 当日日期
DATE=$(date +"%Y%m%d")

# 当前分支
CURRENT_BRANCH="release"

# 获取最新版本号
LATEST_TAG=$(git tag -l "${CURRENT_BRANCH}_$DATE_v*" | sort -V | tail -n1)
# 如果今天还没有版本，从v1开始
if [ -z "$LATEST_TAG" ]; then
    VERSION=1
else
    # 提取现有的最大版本
    VERSION=${LATEST_TAG#*v}
    # 递增版本号
    ((VERSION++))
fi

# 创建新的标签名
TAG_NAME="${CURRENT_BRANCH}_${DATE}_v${VERSION}"

git tag $TAG_NAME
echo "Created new tag: $TAG_NAME"
```