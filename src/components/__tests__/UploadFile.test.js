/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UploadFile from '../game-intro/UploadFile';

describe("Test file uploader", () => {
  test('check upload button renders', () => {
    const { container } = render(<UploadFile />);

    const fileInputElement = container.getElementsByClassName("fileUpload");

    expect(fileInputElement).toBeTruthy();
  });

  test('check start-reminder renders', () => {
    render(<UploadFile />);
    const startReminder = screen.getByText(/please select the file to upload \(\.tsv only\)/i);
    expect(startReminder).toBeInTheDocument();
  });

  test('check next button disabled while not upload file', () => {
    render(<UploadFile />);
    const nextBtn = screen.getByText(/next/i).closest('button');
    expect(nextBtn).toBeDisabled();
  });

  test('check next button while file already uploaded', () => {
    render(<UploadFile />);

    const fs = require('fs');
    const sampleBuffer = fs.readFileSync('./src/components/__tests__/sample.tsv');
    const blob = new Blob([sampleBuffer]);
    const file = new File([blob], 'sample.tsv')

    const inputElement = screen.getByTestId(/fileDrop/i);

    userEvent.upload(inputElement, file);
    const nextBtn = screen.getByText(/next/i);
    expect(nextBtn).toBeInTheDocument();
    expect(nextBtn).toBeEnabled();
  });
});

