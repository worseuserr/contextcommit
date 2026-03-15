import * as vscode from 'vscode';
import { exec } from 'child_process';

function run(cmd: string, cwd: string) {
    return new Promise<string>((resolve, reject) => {
        exec(cmd, { cwd }, (err, stdout, stderr) => {
            if (err) reject(stderr || err.message);
            else resolve(stdout);
        });
    });
}

export function activate(context: vscode.ExtensionContext) {

    const addCmd = vscode.commands.registerCommand('commitFile.add', async (uri: vscode.Uri) => {

        const cwd = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
        if (!cwd) {
            vscode.window.showErrorMessage("No workspace open");
            return;
        }

        const file = uri.fsPath;

        try {
            await run(`git add "${file}"`, cwd);
            vscode.window.showInformationMessage(`Added: ${file}`);
        } catch (err:any) {
            vscode.window.showErrorMessage(err);
        }
    });

    const commitCmd = vscode.commands.registerCommand('commitFile.commit', async (uri: vscode.Uri) => {

        const cwd = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
        if (!cwd) {
            vscode.window.showErrorMessage("No workspace open");
            return;
        }

        const message = await vscode.window.showInputBox({
            prompt: "Commit message"
        });

        if (!message) return;

        const file = uri.fsPath;

        try {
            await run(`git add "${file}"`, cwd);
            await run(`git commit -m "${message}"`, cwd);

            vscode.window.showInformationMessage(`Committed staged files`);
        } catch (err:any) {
            vscode.window.showErrorMessage(err);
        }
    });

    context.subscriptions.push(addCmd, commitCmd);
}

export function deactivate() {}