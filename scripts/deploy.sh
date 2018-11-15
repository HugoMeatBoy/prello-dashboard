#!/bin/sh
if [ $# -gt 0 ]
then ROOTDIR=$1 && cd $ROOTDIR
fi
echo "============================"
echo "PRELLO DASHBOARD DEPLOYEMENT"
echo "============================"
echo ""
echo ""
echo "Deploying React app"
echo "----------------------"
GIT=`which git`
${GIT} add --all .
${GIT} commit -m "deploy"
${GIT} push dokku master
echo ""
echo ""
echo "======================="
echo "DEPLOYEMENT DONE"
echo "======================="
